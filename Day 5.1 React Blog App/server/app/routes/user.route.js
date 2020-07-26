
import userCtrl from '../controllers/user.ctrl';
import userValidator from '../validators/user.validator';
import postCtrl from '../controllers/post.ctrl';
import postValidator from '../validators/post.validator';
import * as express from 'express';
const router = express.Router()

router.route('/').get(userCtrl.list);
router.route('/:userId').get(userCtrl.get);
router.route('/').post([userValidator.reqValidator, userValidator.uniqueValidator, userCtrl.create]);
router.route('/:userId').delete(userCtrl.delete);

router.route('/:userId/posts')
	.get(postCtrl.getPostByUser)
	.post([postValidator.reqValidator, postCtrl.create]);

export default router;