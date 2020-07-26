
import commonUtil from '../util/common.util';
import errorMessages from '../../config/error.messages';
import logger from '../util/logger';

const validators = {
	reqValidator: (req, resp, next)=>{
		const body = req.body;
		let message;
		if (body) {
			if (commonUtil.isEmty(body.title)){
				message = errorMessages.POST_DATA_TITLE_INVALID;
			} else if (commonUtil.isEmty(body.content)){
				message = errorMessages.POST_DATA_CONTENT_INVALID;
			} else {
				next();
				return;
			}
		} else {
			message = errorMessages.POST_DATA_INVALID;
		}
		resp.status(400).end(message);
	},
	uuidValidator: (req, resp, next)=>{
		const postId = req.params.postId;
		if (true) {
			next();
		} else {
			resp.status(400).end(errorMessages.POST_ID_INVALID);
		}
	}
}
export default validators;
