import { PostInput } from '../database/models/post.model';
import PostService from '../database/services/post.service';
import response from '../helpers/response';
import { ErrorTypes, Request, Response } from '../types';
import { uploadToCloudinary } from '../helpers/upload';

class PostController {
  static async fetchAllposts(req: Request, res: Response) {
    try {
      const postData = await PostService.getAllPosts();

      if (!postData.length) return response(res, 404, 'No posts Registered yet', null, ErrorTypes.NotFound);

      return response(res, 200, 'All posts', postData);
    } catch (error) {
      return response(res, 500, error.message || error, null, ErrorTypes.Server);
    }
  }

  static async getPost(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const postData = await PostService.findPost({ _id: id });
      if (!postData) return response(res, 404, 'post does not exist', null, ErrorTypes.NotFound);

      return response(res, 200, 'post Details', postData);
    } catch (error) {
      return response(res, 500, error.message || error, null, ErrorTypes.Server);
    }
  }

  static async addPost(req: Request, res: Response) {
    try {
      if (!req.file) {
        return response(res, 422, 'Image file is required', null, ErrorTypes.Validation);
      }

      const payload: PostInput = req.body;

      // Upload image file to cloudinary
      const imageUrl = await uploadToCloudinary(req.file);

      const postData = {
        ...payload,
        imageUrl,
      };

      const newpost = await PostService.addPost(postData);

      return response(res, 201, 'Post Registered', newpost);
    } catch (error) {
      if ((error?.message as string)?.toLowerCase().includes('validation')) {
        return response(res, 422, error?.message, null, ErrorTypes.Validation);
      }

      return response(res, 500, error.message || error, null, ErrorTypes.Server);
    }
  }

  static async updatePost(req: Request, res: Response) {
    try {
      const { id } = req.params;

      const payload: Partial<PostInput> = req.body;

      const postExist = await PostService.findPost({ _id: id });
      if (!postExist) return response(res, 404, 'Post does not exist', null, ErrorTypes.NotFound);

      // Upload to cloudinary if image file was passed in the params

      if (req.file) {
        const imageUrl = await uploadToCloudinary(req.file);
        payload.imageUrl = imageUrl;
      }

      const updatedpost = await PostService.updatePost({ _id: id }, payload);
      return response(res, 201, 'post Updated', updatedpost);
    } catch (error) {
      if ((error?.message as string)?.toLowerCase().includes('validation')) {
        return response(res, 422, error?.message, null, ErrorTypes.Validation);
      }

      return response(res, 500, error.message || error, null, ErrorTypes.Server);
    }
  }

  static async deletePost(req: Request, res: Response) {
    try {
      const { id } = req.params;

      const postExist = await PostService.findPost({ _id: id });
      if (!postExist) return response(res, 404, 'Post does not exist', null, ErrorTypes.NotFound);

      await PostService.deletePost(id);

      return response(res, 200, 'Post Deleted', null);
    } catch (error) {
      return response(res, 500, error.message || error, null, ErrorTypes.Server);
    }
  }
}

export default PostController;
