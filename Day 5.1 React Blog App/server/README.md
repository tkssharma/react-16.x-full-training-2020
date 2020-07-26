# nodejs-rest-apis

This is a proposal / example for creating restful APIs with node, express, sequelize and mysql.

## frameworks

* ES6 through babel
* node 
* express
* mongodb

## folder structure
		blog-restful/
		+-- .gitignore
		+-- .babelrc
		+-- .editorconfig
		+-- package.json
		+-- server.js
		+-- app
		¦	 +-- controllers
		¦	 ¦   +-- user.ctrl.js
		¦	 ¦   +-- post.ctrl.js
		¦	 +-- models
		¦	 ¦   +-- index.js
		¦	 ¦   +-- user.js
		¦	 ¦   +-- post.js
		¦	 +-- routes
		¦	 ¦   +-- post.route.js
		¦	 ¦   +-- user.route.js
		¦	 +-- services
		¦	 ¦   +-- post.service.js
		¦	 ¦   +-- user.service.js
		¦	 +-- utils
		¦	 ¦   +-- common.util.js
		¦	 ¦   +-- logger.js
		¦	 +-- validators
		¦	     +-- post.validator.js
		¦	     +-- user.validator.js
		+-- config
			 +-- express.js
			 +-- error.messages.js
			 +-- config.js
			 +-- env
			 ¦   +-- all.js
			 ¦   +-- development.js
			 ¦   +-- production.js
			 ¦   +-- test.js
			 +-- sslcerts

## api

### user

| #     | api         | description |
|------ | ----------- | ----------- |
| 1 | get **/api/users** | Get all users based on input criteria such as status, limit.. |
| 2 | get **/api/users/:userId** | Get a user by userid |
| 3 | post **/api/users/** | Create a new user |
| 4 | delete **/api/users/:userId** | Delete a user by userid |

### post
| #     | api         | description |
|------ | ----------- | ----------- |
| 2 | get **/api/posts/:postId** | Get a post by id |
| 3 | post **/api/users/:userId/posts** | Create a new post by user |
| 4 | get **/api/users/:userId/posts** | get a post by user |
| 5 | delete **/api/posts/:postId** | Delete a post by post id |
| 6 | put **/api/posts/:postId** | Update a post by post id |

## commands
* start in development mode: **npm run start:dev**
* build the code to es5: **npm run build**
* run unit test: **npm run test:unit**
