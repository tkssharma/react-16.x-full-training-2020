
import errorMessages from '../../config/error.messages';
import * as postService from '../service/post.service';

const operations = {
    getPostByUser: async(req, res, next) => {
        const { userId} = req.params;
        try {
            const data = await postService.getPostByUser(userId, req.query)
            res.status(200).json(data);
        } catch (err) {
            res.status(500).send(errorMessages.SERVER_ERROR);
        }
    },
    get: async(req, res, next) => {
        const postId = req.params.postId;
        try {
            const data =  await postService.findById(postId);
            res.status(200).json(data);
            } catch(err){
                res.status(500).send(errorMessages.SERVER_ERROR);
        }
    },
    // /api/users/:userid/posts
    create: async (req, res, next) => {
        try {
        const post = req.body;
        const { userId } = req.params;
        const data =  await postService.create(post, userId)
        res.status(200).json(data);
        } catch(err){
            res.status(500).send(errorMessages.SERVER_ERROR);
        }
    },
    delete: async (req, res) => {
        const { postId } = req.params;
        try {
            const data = await postService.delete(postId);
            res.status(200).json(data);
            } catch(err){
                res.status(500).send(errorMessages.SERVER_ERROR);
        }
    },
    update: async (req, res, next) => {
        const postId = req.params.postId;
        const post = req.body;
        post.id = postId;
        try {
            const data =  await postService.update(post);
            res.status(200).json(data);

            } catch(err){
                res.status(500).send(errorMessages.SERVER_ERROR);
        }
    }
}

export default operations;
