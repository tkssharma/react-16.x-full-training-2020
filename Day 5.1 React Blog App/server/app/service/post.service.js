import errorMessages from '../../config/error.messages';

const Post  = require('../models/post');
const User  = require('../models/user');

export async function list({ limit=50,offset=0, ...args} = {}) {
    return await Post.find({})
}
export async function getPostByUser(userId, { limit=50,offset=0, ...args} = {}) {
    return await Post.find({user : userId}).populate('user')
}
export async function findById(id) {
    console.log(id);
    return await Post.findById(id).populate('user');
}
export async function create(post, userId) {
     const newPost = await Post.create(post);
     const id = post._id;
     const user = await User.findById(userId);
     if(! user){
         throw new Error(errorMessages.USER_NOT_FOUND);
     }
     let posts = user.posts || [];
     posts.push(id);
     user.posts = posts;
     await user.save();
     newPost.user = userId;
     return await newPost.save();
}
export async function update(UserId) {
    return await Post.findById(UserId).populate('user')
}
export async function deletePost(postId) {
    return await Post.findByIdAndRemove(postId);
}