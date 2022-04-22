import { DialogsAction } from '../../../redux/dialogs/types';

export interface MessageFormProps {
    addMessage: (payload: string) => DialogsAction;
}

export interface FormValues {
    message: string;
}
