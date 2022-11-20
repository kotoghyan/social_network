import React from 'react';
import classes from './Dialogs.module.css'
import {Field, reset} from "redux-form";
import {Textarea} from "../common/FormsControls/formsControls";
import {setMaxLength} from "../../utils/Validators/validators";


const maxLength100 = setMaxLength(200)

const SendMessageDialogsForm = ({handleSubmit},...props) => {
    return (
        <form onSubmit={handleSubmit}>
        <div>
            <div className={classes.textForSendMessage}>
                <Field placeholder={'Enter your Message'}name={'newMessageBody'} component={Textarea} validate={maxLength100}/></div>
            <div className={classes.sendButton}>
                <button>Send</button>
            </div>
        </div>
        </form>
    )
}

export default SendMessageDialogsForm;


