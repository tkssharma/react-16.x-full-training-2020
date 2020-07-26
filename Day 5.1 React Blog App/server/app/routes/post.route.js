
import postCtrl from '../controllers/post.ctrl';
import postValidator from '../validators/post.validator';
import * as express from 'express';
const router = express.Router()

router.route('/:postId')
	.get([postValidator.uuidValidator, postCtrl.get])
	.put([postValidator.uuidValidator, postCtrl.update])
	.delete([postValidator.uuidValidator, postCtrl.delete]);

export default router

