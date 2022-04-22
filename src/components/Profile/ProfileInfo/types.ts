import { Dispatch } from 'redux';

export interface ProfileInfoProps {
    profile: any;
    status: string;
    updateStatus: (status: any) => (dispatch: Dispatch<any>) => Promise<void>;
    isOwner: boolean;
    savePhoto: (file: any) => (dispatch: Dispatch<any>) => Promise<void>;
}
