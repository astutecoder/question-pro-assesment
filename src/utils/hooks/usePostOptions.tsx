import { useMemo } from 'react';
import { useQuery, useQueryClient } from 'react-query';
import { getPosts } from '../../services/post.service';
import { IPost } from '../type/IPost';

export const usePostOptions = () => {
  useQueryClient();
  const postQuery = useQuery('posts', getPosts);
  const options = useMemo(() => {
    if (postQuery.isLoading || !postQuery.data?.length) {
      return [];
    }

    return postQuery.data?.map((data: IPost) => ({
      label: data?.title,
      value: data?.id,
    }));
  }, [postQuery.isLoading, postQuery.data?.length]);

  return options;
};
