import { SERVER_BASE_URL } from '../utils/constants/urls';

export const getComments = async () => {
  const response = await fetch(`${SERVER_BASE_URL}/comments`);
  const data = await response.json();

  return data;
};
