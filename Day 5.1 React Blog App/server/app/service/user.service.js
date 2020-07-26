
const User  = require('../models/user');

export async function findByUserName (name) {
    return await User.findOne({ userName: name});
}
export async function list({ limit=50,offset=0, ...args} = {}) {
    return await User.find({}).populate('posts');
}
export async function findById(UserId) {
    return await User.findById(UserId).populate('posts');
}
export async function create(user) {
    return await User.create(user);
}
export async function deleteUser(UserId) {
    return await User.findByIdAndRemove(UserId);
}