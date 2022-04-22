import React from 'react';
import s from '../Dialogs.module.css';

interface MessageProps {
    incoming: boolean;
    message: string;
}

function Message({ incoming, message }: MessageProps): JSX.Element {
  return (
    <div className={incoming ? s.incoming : s.outgoing}>{message}</div>
  );
}

export default Message;
