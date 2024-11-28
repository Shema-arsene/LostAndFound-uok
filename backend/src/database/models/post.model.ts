import { model, Schema } from 'mongoose';
import { formatApiResponse } from '../../helpers/formatResponse';

export interface PostInput {
  title: string;
  description: string;
  category: string;
  datePosted: number;
  imageUrl?: string;
}

export interface IPost extends PostInput, Document {}

const PostSchema = new Schema<IPost>(
  {
    title: {
      type: String,
      required: [true, 'Please provide a title.'],
      minlength: [3, 'Minimum length for title is atleast 3 characters.'],
    },
    description: {
      type: String,
      required: [true, 'Please provide a description.'],
      minlength: [3, 'Minimum length for description is atleast 3 characters.'],
    },
    category: {
      type: String,
      required: [true, 'Please provide a category.'],
    },
    datePosted: {
      type: Number,
      default: Date.now(),
    },
    imageUrl: {
      type: String,
      required: [true, 'Please provide an Image URL.'],
    },
  },
  {
    timestamps: false,
  }
);

PostSchema.set('toJSON', {
  transform: formatApiResponse,
});

export const Post = model<IPost>('Post', PostSchema);
