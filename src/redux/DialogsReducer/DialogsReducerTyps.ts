import {DIALOG_REDUCER_TYPES} from "./DialogsReducer";

export type MessagesType = { id:number, text:string };
export type DialogsDataType = { id:number, name:string, ava:string };
export type initialDialogsStateType = {
    messages:Array<MessagesType>,
    dialogsData:Array<DialogsDataType>
};

export type SendNewMessageTypes = {
    type: typeof DIALOG_REDUCER_TYPES.SEND_MESSAGE,
    payload: string
};