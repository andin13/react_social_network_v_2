import s from '../Dialogs.module.css';

const Message = (props) => {
    return (
        <div className={props.incoming ? s.incoming : s.outgoing}>{props.message}</div>
    )
}

export default Message;