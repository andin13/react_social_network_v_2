import { ThunkType } from '../../../redux/profile/thunks';

export interface ProfileInfoProps {
    profile: any;
    status: string;
    isOwner: boolean;
    savePhoto: (file: File) => ThunkType;
}
