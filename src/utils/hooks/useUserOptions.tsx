import { useQuery, useQueryClient } from 'react-query';
import { getUsers } from '../../services/user.service';
import { useMemo } from 'react';
import { IUser } from '../type/IUser';

export const useUserOptions = () => {
  useQueryClient();
  const userQuery = useQuery('users', getUsers);
  const options = useMemo(() => {
    if (userQuery.isLoading || !userQuery.data?.length) {
      return [];
    }

    return userQuery.data?.map((data: IUser) => ({
      label: data?.name,
      value: data?.id,
    }));
  }, [userQuery.isLoading, userQuery.data?.length]);

  return options;
};
