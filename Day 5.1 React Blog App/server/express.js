import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import methodOverride from 'method-override';
import cookieParser from 'cookie-parser';
import helmet from 'helmet';
import logger from './app/util/logger';
import errorMessages from './config/error.messages';
import userRouter from './app/routes/user.route';
import postRouter from './app/routes/post.route';

export default  () => {
	// Initialize express app
	var app = express();

	// Showing stack errors
	app.set('showStackError', true);

	// CookieParser should be above session
	app.use(cookieParser());

	// Request body parsing middleware should be above methodOverride
	app.use(bodyParser.json({ type: 'application/*', limit: '30mb' }));
	app.use(bodyParser.urlencoded({ extended: true }));
	app.use(methodOverride());

	// Use helmet to secure Express headers
	app.use(helmet.xframe());
	app.use(helmet.xssFilter());
	app.use(helmet.nosniff());
	app.use(helmet.ienoopen());
	app.disable('x-powered-by');

	app.use('/api/users', userRouter);
	app.use('/api/posts', postRouter);

	app.use(function(err, req, res, next) {
		let errorMsg;
		if (err.name === 'SyntaxError' && err.message.indexOf('Unexpected') >= 0) {
			errorMsg = errorMessages.UNPARSABLE_REQUEST;
			res.status(400).send(errorMsg);
			return;
		}
		errorMsg = errorMessages.SERVER_ERROR;
		logger.error(err.stack);
		res.status(500).send(errorMsg);
	});
	// Assume 404 since no middleware responded
	app.use((req, res) => {
		console.log('request ' + req.path + ' not found');
		const notFound = errorMessages.NOT_FOUND;
		res.status(404).send(notFound);
	});
	console.log('completed configuring express application');
	return app;
};