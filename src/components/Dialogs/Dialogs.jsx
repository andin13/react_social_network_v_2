import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import React from "react";
import Message from "./Message/Message";
import MessageForm from "./MessageForm/MessageForm";
import { useSelector, useDispatch } from 'react-redux';
import { addMessage } from '../../Redux/dialogs-reducer';
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

function Dialogs() {

    const dialogsPage = useSelector(state => state.dialogsPage);
    const dispatch = useDispatch();
    const addMessageFn = (message) => dispatch(addMessage(message));

    const dialogsElements = dialogsPage.dialogs.map(d => <DialogItem name={d.name} id={d.id} key={d.id}/>)
    const messagesElements = dialogsPage.messages.map(m => <Message incoming={m.incoming} key={m.id} message={m.message}/>)

    return <div className={s.dialogs}>
        <div className={s.dialogsItems}>
            {dialogsElements}
        </div>
        <div className={s.messageArea}>
            <div className={s.messages}>
                {messagesElements}
            </div>
            <MessageForm addMessage={addMessageFn} />
        </div>
    </div>
}

export default withAuthRedirect(Dialogs);