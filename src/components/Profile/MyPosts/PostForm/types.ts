import { ProfileAction } from '../../../../redux/profile/types';

export interface PostFormProps {
    addPost: (payload: string) => ProfileAction;
}

export interface FormValues {
    post: string;
}
