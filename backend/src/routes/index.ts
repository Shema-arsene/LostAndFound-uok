import { Router } from 'express';
import postRoutes from './post';
import adminRoutes from './admin';

const router = Router();

router.use('/posts', postRoutes);
router.use('/admin', adminRoutes);

export default router;
