import { instance } from '../apiInstance';

export const profileAPI = {
  getProfile: async (userId: number) => {
    const response = await instance.get(`profile/${userId}`);
    return response.data;
  },
  getStatus: async (userId: number) => {
    const response = await instance.get(`profile/status/${userId}`);
    return response.data;
  },
  updateStatus: async (status: string) => {
    const response = await instance.put('profile/status/', { status });
    if (status) return response;
    return null;
  },
  savePhoto(photoFile: File) {
    const formData = new FormData();
    formData.append('image', photoFile);
    return instance.put('profile/photo/', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  },
};
