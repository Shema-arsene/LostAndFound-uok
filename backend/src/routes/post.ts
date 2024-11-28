import { Router } from 'express';
import Controller from '../controllers/post.controller';
import * as Authorization from '../middlewares/authorization';
import multer from 'multer';

const router = Router();
const upload = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 15 * 1024 * 1024, // 5MB limit
    files: 1,
  },
});

router.get('/all', Controller.fetchAllposts);
router.get('/:id', Controller.getPost);

router.post('/new', upload.single('image'), Controller.addPost);

router.put('/:id/update', [Authorization.isAdmin, upload.single('image')], Controller.updatePost);

router.delete('/:id/remove', [Authorization.isAdmin], Controller.deletePost);

export default router;
