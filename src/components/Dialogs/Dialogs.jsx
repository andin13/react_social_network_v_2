import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import React from "react";
import Message from "./Message/Message";

const Dialogs = (props) => {

    let dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
    let messagesElements = props.dialogsPage.messages.map(m => <Message incoming={m.incoming} message={m.message}/>)

    let textArea = props.dialogsPage.textArea;

    let ButtonPush = () => {
        if (textArea) {
            props.ButtonPush();
        }
    }

    let changeMessageArea = (e) => {
        let text = e.target.value;
        props.changeMessageArea(text);
    }

    return <div className={s.dialogs}>
        <div className={s.dialogsItems}>
            {dialogsElements}
        </div>
        <div className={s.messageArea}>
            <div className={s.messages}>
                {messagesElements}
            </div>
            <div className={s.enterArea}>
                <textarea value={textArea}
                        onChange={changeMessageArea}
                        placeholder='Enter your message'
                />
                <button onClick={ButtonPush}><img src="https://icon-library.com/images/chat-send-icon/chat-send-icon-1.jpg"/></button>
            </div>

        </div>
        
        
    </div>
}

export default Dialogs;