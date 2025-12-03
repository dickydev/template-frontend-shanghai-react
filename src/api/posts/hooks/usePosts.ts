import { useQuery } from '@tanstack/react-query';
import { api } from '../../client';
import type { Post } from '../types';

export const usePosts = () => {
  return useQuery<Post[]>({
    queryKey: ['posts'],
    queryFn: async () => {
      const res = await api.get('/posts');
      return res.data;
    },
    staleTime: 1000 * 60 * 5,
    retry: 2,
  });
};
