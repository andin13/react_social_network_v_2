import { AppDispatch } from '../../../toolkitRedux/store';

export interface ProfileInfoProps {
    profile: any;
    status: string;
    isOwner: boolean;
    savePhoto: (file: File) => (dispatch: AppDispatch) => Promise<void>;
}
