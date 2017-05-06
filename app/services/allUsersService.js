import axios from 'axios';

const allUsersService = {
  getAllUsers: () => axios.get('/user')
};

export default allUsersService;
