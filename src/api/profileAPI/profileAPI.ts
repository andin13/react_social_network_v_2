import { apiUrls } from '../../constants/apiUrls';
import { instance } from '../apiInstance';

export const profileAPI = {
  getProfile: async (userId: number) => {
    const response = await instance.get(`${apiUrls.PROFILE}/${userId}`);
    return response.data;
  },
  getStatus: async (userId: number) => {
    const response = await instance.get(`${apiUrls.PROFILE}/${apiUrls.STATUS}/${userId}`);
    return response.data;
  },
  updateStatus: async (status: string) => {
    const response = await instance.put(`${apiUrls.PROFILE}/${apiUrls.STATUS}/`, { status });
    if (status) return response;
    return null;
  },
  savePhoto(photoFile: File) {
    const formData = new FormData();
    formData.append('image', photoFile);
    return instance.put(`${apiUrls.PROFILE}/${apiUrls.PHOTO}/`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  },
};
