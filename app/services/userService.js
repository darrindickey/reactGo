import { apiEndpoint } from '../../config/app';
import createRestApiClient from '../utils/createRestApiClient';

export default (params) => {
  const client = createRestApiClient().withConfig({ baseURL: apiEndpoint });
  let username;

  if (params.data && params.data.username) {
    username = params.data.username;
  } else if (params.username) {
    username = params.username;
  } else {
    username = params;
  }

  return {
    getUser: () => client.request({
      method: 'GET',
      url: `/user/${username}`
    }),

    updateUser: ({ data }) => client.request({
      method: 'PUT',
      url: `/user/${username}`,
      data
    })
  };
};
