import s from '../Dialogs.module.css';

function Message({incoming, message}) {
    return (
        <div className={incoming ? s.incoming : s.outgoing}>{message}</div>
    )
}

export default Message;