
import commonUtil from '../util/common.util';
import errorMessages from '../../config/error.messages';
import logger from '../util/logger';
import {findByUserName} from '../service/user.service';

const validators = {
	reqValidator: (req, resp, next)=>{
		const body = req.body;
		let message;
		if (body) {
			if (!body.userName || body.userName.length <3 ){
				message = errorMessages.USER_DATA_USERNAME_INVALID;
			} else if (commonUtil.isEmty(body.firstName)){
				message = errorMessages.USER_DATA_FIRSTNAME_INVALID;
			} else if (commonUtil.isEmty(body.lastName)){
				message = errorMessages.USER_DATA_LASTNAME_INVALID;
			} else {
				next();
				return;
			}
		} else {
			message = errorMessages.USER_DATA_INVALID;
		}
		resp.status(400).json({message});
	},
	uniqueValidator: async (req, resp, next)=>{
		const data = await findByUserName(req.body.userName);
		if(data) {
			resp.status(400).send(errorMessages.USER_USERNAME_TAKEN);
		} else {
			next();
		}
	}
}
export default validators;
