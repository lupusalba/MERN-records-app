const User = require('../Models/ModelUser')

const getAllUsers = async (req, res) => {
  const users = await User.find();
  if (!users) return res.status(204).json({ 'massage': 'No users found' });
  res.json({users})
}

const deleteUser = async (req, res) => {
  if (!req?.body?.id) return res.status(400).json({ 'massage': 'User ID is required' });
  const user = await User.findOne({ _id: req.body.id });
  const result = await user.deleteOne({ _id: req.body.id });
  res.json(result)
}

const getUser = async (req, res) => {
  if (!req?.params?.id) return res.status(400).json({ 'massage': 'User ID is required' });
  const user = await User.findOne({ _id: req.params.id}).exec();
  if (!user) {
    return res.status(204).json({'massage': `User ID ${req.params.id} not found`});
  }
  res.json(user);
}

module.exports = {
  getAllUsers,
  deleteUser,
  getUser
}