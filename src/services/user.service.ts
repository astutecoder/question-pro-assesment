import { SERVER_BASE_URL } from '../utils/constants/urls';

export const getUsers = async () => {
  const response = await fetch(`${SERVER_BASE_URL}/users`);
  const data = await response.json();

  return data;
};
