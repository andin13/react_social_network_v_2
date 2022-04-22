import { Dispatch } from 'redux';

export interface ProfileStatusProps {
    status: string;
    isOwner: boolean;
    updateStatus: (status: any) => (dispatch: Dispatch<any>) => Promise<void>;
}
