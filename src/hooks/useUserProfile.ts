import { useQuery } from '@tanstack/react-query';
import { getMyProfile } from '@/axios/mypage/api';
import { UserTypes } from '@/types/mypage.types';

export const useUserProfile = (enabled: boolean = true) => {
  return useQuery<UserTypes>({
    queryKey: ['myProfile'],
    queryFn: getMyProfile,
    enabled,
  });
};
