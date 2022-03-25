import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import React from "react";
import Message from "./Message/Message";
import MessageForm from "./MessageForm/MessageForm";

const Dialogs = (props) => {

    const dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem name={d.name} id={d.id} key={d.id}/>)
    const messagesElements = props.dialogsPage.messages.map(m => <Message incoming={m.incoming} key={m.id} message={m.message}/>)
    const textArea = props.dialogsPage.textArea;

    return <div className={s.dialogs}>
        <div className={s.dialogsItems}>
            {dialogsElements}
        </div>
        <div className={s.messageArea}>
            <div className={s.messages}>
                {messagesElements}
            </div>
            <MessageForm textArea={textArea} addMessage={props.addMessage} />
        </div>
    </div>
}

export default Dialogs;