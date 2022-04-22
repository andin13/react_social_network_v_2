import { IDialog } from '../commonTypes/IDialog';
import { IMessage } from '../commonTypes/IMessage';

export interface DialogsState {
    dialogs: Array<IDialog>;
    messages: Array<IMessage>;
}

export enum DialogsActionTypes {
    ADD_MESSAGE = 'ADD_MESSAGE',
}

interface AddMessageAction {
    type: DialogsActionTypes.ADD_MESSAGE;
    payload: string;
}

export type DialogsAction = AddMessageAction;
