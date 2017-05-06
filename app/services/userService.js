import axios from 'axios';

const service = {
  getUsers: () => axios.get('/user')
};

export default service;
