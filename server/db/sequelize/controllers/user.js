import { Models } from '../models';

const User = Models.User;

/**
 * List
 */
export function all(req, res) {
  User.findAll({
    attributes: { exclude: ['password', 'createdAt', 'updatedAt'] }
  }).then((userList) => {
    console.log('userList', userList)
    res.json(userList);
  }).catch((err) => {
    console.log(err);
    res.status(500).send('Error in first query');
  });
}

export function one(req, res) {
  const userId = req.user.id;

  User.findOne({
    where: { id: userId },
    attributes: { exclude: ['password', 'createdAt', 'updatedAt'] }
  }).then((userData) => {
    console.log('userController data', userData)
    res.json(userData);
  }).catch((err) => {
    console.log(err);
    res.status(500).send('Error in first query');
  });
}

export default {
  all,
  one
};
