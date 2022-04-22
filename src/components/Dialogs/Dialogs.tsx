import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import MessageForm from './MessageForm/MessageForm';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useActionsAndThunks } from '../../hooks/useActionsAndThunks';

function Dialogs(): JSX.Element {
  const dialogsPage = useTypedSelector((state) => state.dialogs);
  const { addMessageAction } = useActionsAndThunks();

  const dialogsElements = dialogsPage.dialogs.map((d) => (
    <DialogItem
      name={d.name}
      key={d.id}
    />
  ));
  const messagesElements = dialogsPage.messages.map((m) => (
    <Message
      incoming={m.incoming}
      key={m.id}
      message={m.message}
    />
  ));

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        {dialogsElements}
      </div>
      <div className={s.messageArea}>
        <div className={s.messages}>
          {messagesElements}
        </div>
        <MessageForm addMessage={addMessageAction} />
      </div>
    </div>
  );
}

export default withAuthRedirect(Dialogs);
