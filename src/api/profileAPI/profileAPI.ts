import { IProfile } from '../../commonTypes/IProfile';
import { apiUrls } from '../../constants/apiUrls';
import { instance } from '../apiInstance';

import { SavePhotoResponseType, UpdateStatusResponseType } from './types';

export const profileAPI = {
  getProfile: async (userId: number) => {
    const response = await instance.get<IProfile>(`${apiUrls.PROFILE}/${userId}`);
    return response.data;
  },
  getStatus: async (userId: number) => {
    const response = await instance.get<string>(`${apiUrls.PROFILE}/${apiUrls.STATUS}/${userId}`);
    return response.data;
  },
  updateStatus: async (status: string) => {
    const response = await instance.put<UpdateStatusResponseType>(
      `${apiUrls.PROFILE}/${apiUrls.STATUS}/`,
      { status },
    );
    return response;
  },
  savePhoto: async (photoFile: File) => {
    const formData = new FormData();
    formData.append('image', photoFile);
    const response = await instance.put<SavePhotoResponseType>(
      `${apiUrls.PROFILE}/${apiUrls.PHOTO}/`,
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      },
    );
    return response.data;
  },
};
