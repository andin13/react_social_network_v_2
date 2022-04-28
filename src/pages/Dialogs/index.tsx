import React from 'react';
import { Navigate } from 'react-router-dom';

import { componentsRoutes } from '../../constants/componentsRoutes';
import { useTypedSelector } from '../../hooks/useTypedSelector';

import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import MessageForm from './MessageForm/MessageForm';

import s from './Dialogs.module.css';

function Dialogs(): JSX.Element {
  const dialogsPage = useTypedSelector((state) => state.DialogsReducer);
  const isAuth = useTypedSelector((state) => state.AuthReducer.isAuth);

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

  if (!isAuth) {
    return <Navigate to={`/${componentsRoutes.LOGIN}`} />;
  }
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        {dialogsElements}
      </div>
      <div className={s.messageArea}>
        <div className={s.messages}>
          {messagesElements}
        </div>
        <MessageForm />
      </div>
    </div>
  );
}

export default Dialogs;
