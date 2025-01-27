import { authAxiosInstance } from './axiosInstance';
import { API_PATH } from './config/path';
import { ACCESS_TOKEN_KEY } from './constants';

interface AuthRequest {
  email: string;
  password: string;
  nickname?: string;
}

interface LoginResponse {
  accessToken: string;
  refreshToken: string;
}

export const authApi = {
  signup: (data: AuthRequest) =>
    authAxiosInstance.post(API_PATH.auth.signup, data),

  login: async (data: Omit<AuthRequest, 'nickname'>) => {
    const response = await authAxiosInstance.post<LoginResponse>(
      API_PATH.auth.login,
      data
    );
    const authHeader = response.headers.authorization;
    if (authHeader && authHeader.startsWith('Bearer ')) {
      const token = authHeader.split(' ')[1];
      localStorage.setItem(ACCESS_TOKEN_KEY, token);
    }
    return response;
  },

  reissue: (refreshToken: string) =>
    authAxiosInstance.post(API_PATH.auth.reissue, { refreshToken }),

  logout: async () => {
    try {
      await authAxiosInstance.post(API_PATH.auth.logout);
      localStorage.removeItem(ACCESS_TOKEN_KEY);
      localStorage.removeItem('userInfo');
      return { success: true };
    } catch (error) {
      return { success: false, error };
    }
  },
};
