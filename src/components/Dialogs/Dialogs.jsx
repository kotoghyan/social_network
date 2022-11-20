import classes from './Dialogs.module.css'
import Message from './Message/Message'
import DialogItem from './DialogItem/DialogItem'
import React from 'react';
import SendMessageDialogsForm from "./SendMessageDialogsForm";
import { reduxForm } from 'redux-form';




const DialogsReduxForm = reduxForm({form:'addNewMessage'})(SendMessageDialogsForm)

const Dialogs = ({messagesPage, ...action}) => {
    const drawDialogData = messagesPage.dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id}
                                                                              ava={dialog.ava} key={dialog.id}/>,);

    const drawMassagesData = messagesPage.messages.map(({text},id) => <Message message={text} id={id} key={id}/>);

    let addNewMessage = (values) => {
        action.sendNewMessage(values.newMessageBody);
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItem}>
                {drawDialogData}
            </div>
            <div className={classes.messagesWrapper}>
                {drawMassagesData}
                <div>
                    <DialogsReduxForm onSubmit={addNewMessage} />
                </div>
            </div>
        </div>
    )
}

export default Dialogs;