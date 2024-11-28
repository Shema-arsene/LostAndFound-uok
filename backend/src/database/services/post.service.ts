import { PostInput, Post } from '../models/post.model';

interface FindOneInterface {
  _id?: string;
}

class PostService {
  static async addPost(newPost: PostInput) {
    try {
      return await Post.create(newPost);
    } catch (error) {
      throw error;
    }
  }

  static async getAllPosts() {
    try {
      return await Post.find();
    } catch (error) {
      throw error;
    }
  }

  static async findPost(params: FindOneInterface) {
    try {
      return await Post.findOne(params);
    } catch (error) {
      throw error;
    }
  }

  static async updatePost(filter: { _id: string }, updateBody: any) {
    try {
      return await Post.findOneAndUpdate(filter, updateBody, { new: true });
    } catch (error) {
      throw error;
    }
  }

  static async deletePost(id: string) {
    try {
      return await Post.findByIdAndDelete(id);
    } catch (error) {
      throw error;
    }
  }
}

export default PostService;
