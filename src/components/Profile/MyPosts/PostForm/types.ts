import { ActionCreatorWithPayload } from '@reduxjs/toolkit';

export interface PostFormProps {
    addPost: ActionCreatorWithPayload<string, string>;
}

export interface FormValues {
    post: string;
}
