import { IUser } from '../../commonTypes/IUser';
import { ResultCodes } from '../../constants/resultCodes';

export type AuthMeResponseType = {
    data: IUser;
    resultCode: ResultCodes;
    messages: Array<string>
  }

export type LoginResponseType = {
    data: {
      userId: number;
    };
    resultCode: ResultCodes;
    messages: Array<string>
  }

export type LogoutResponseType = {
    resultCode: ResultCodes;
    messages: Array<string>
  }
