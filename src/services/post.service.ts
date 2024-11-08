import { SERVER_BASE_URL } from '../utils/constants/urls';

export const getPosts = async () => {
  const response = await fetch(`${SERVER_BASE_URL}/posts`);
  const data = await response.json();

  return data;
};
