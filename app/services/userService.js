import { apiEndpoint } from '../../config/app';
import createRestApiClient from '../utils/createRestApiClient';

export default (params) => {
  const client = createRestApiClient().withConfig({ baseURL: apiEndpoint });
  const username = params.username;

  return {
    getUser: () => client.request({
      method: 'GET',
      url: `/user/${username}`
    })
  };
};
