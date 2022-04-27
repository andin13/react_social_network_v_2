import { IPhotos } from '../../commonTypes/IPhotos';
import { ResultCodes } from '../../constants/resultCodes';

export type UpdateStatusResponseType = {
    data: null;
    resultCode: ResultCodes;
    messages: Array<string>
  }

export type SavePhotoResponseType = {
    data: IPhotos;
    resultCode: ResultCodes;
    messages: Array<string>
  }
