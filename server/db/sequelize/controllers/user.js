import _ from 'lodash';
import { Models } from '../models';

const User = Models.User;

const removeEmptyStrings = (obj) => {
  const newObj = {};
  Object.keys(obj).forEach((prop) => {
    if (obj[prop] !== '') {
      newObj[prop] = obj[prop];
    }
  });
  return newObj;
};

/**
 * List
 */
export function all(req, res) {
  User.findAll({
    attributes: { exclude: ['password', 'createdAt', 'updatedAt'] }
  }).then((userList) => {
    res.json(userList);
  }).catch((err) => {
    console.log(err);
    res.status(500).send('Error in first query');
  });
}

/**
 * Single User
 */
export function one(req, res) {
  const username = req.params.username;

  User.findOne({
    where: { username },
    attributes: { exclude: ['password', 'createdAt', 'updatedAt'] }
  }).then((userData) => {
    res.json(userData);
  }).catch((err) => {
    console.log(err);
    res.status(500).send('Error in first query');
  });
}

/**
 * Specific User
 */
export function update(req, res) {
  const formFields = req.body;
  let query = {
    username: formFields.username,
    first_name: formFields.first_name,
    last_name: formFields.last_name,
    display_name: formFields.display_name,
    user_facebook: formFields.user_facebook,
    user_twitter: formFields.user_twitter,
    user_instagram: formFields.user_instagram,
    user_foursquare: formFields.user_foursquare,
    user_google_plus: formFields.user_google_plus
  };

  query = removeEmptyStrings(query);
  User.update( query, {
    where: { email: formFields.email }
  }).then((result) => {
    res.status(200).send('success');
  }).catch((err) => {
    console.log(err);
    res.status(500).send('Error in first query');
  });
}

export default {
  all,
  one,
  update
};
