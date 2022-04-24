import { ApiUrls } from '../../constants/ApiUrls';
import { instance } from '../apiInstance';

export const profileAPI = {
  getProfile: async (userId: number) => {
    const response = await instance.get(`${ApiUrls.PROFILE}/${userId}`);
    return response.data;
  },
  getStatus: async (userId: number) => {
    const response = await instance.get(`${ApiUrls.PROFILE}/${ApiUrls.STATUS}/${userId}`);
    return response.data;
  },
  updateStatus: async (status: string) => {
    const response = await instance.put(`${ApiUrls.PROFILE}/${ApiUrls.STATUS}/`, { status });
    if (status) return response;
    return null;
  },
  savePhoto(photoFile: File) {
    const formData = new FormData();
    formData.append('image', photoFile);
    return instance.put(`${ApiUrls.PROFILE}/${ApiUrls.PHOTO}/`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  },
};
