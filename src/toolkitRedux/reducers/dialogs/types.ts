import { IDialog } from '../../../commonTypes/IDialog';
import { IMessage } from '../../../commonTypes/IMessage';

export interface DialogsState {
    dialogs: Array<IDialog>;
    messages: Array<IMessage>;
}
