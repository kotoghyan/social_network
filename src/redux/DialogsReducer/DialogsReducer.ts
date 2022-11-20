import {initialDialogsStateType, SendNewMessageTypes} from "./DialogsReducerTyps";

export enum DIALOG_REDUCER_TYPES {
    SEND_MESSAGE = 'dialogsPage/SEND-MESSAGE'
}

const initialState:initialDialogsStateType = {
    messages: [
        { id: 1, text: 'Hi' },
        { id: 2, text: 'How are you?' },
        { id: 3, text: 'Thx, i am fine' },
    ],
    dialogsData: [
        {id: 1, name: 'Andranik', ava: 'UI_UX/Avatar/Andranik.png'},
        {id: 2, name: 'Hakob', ava: 'UI_UX/Avatar/Hakob.png'},
        {id: 3, name: 'Hayko', ava: 'UI_UX/Avatar/Hayko.png'},
        {id: 4, name: 'Harut', ava: 'UI_UX/Avatar/Harut.png'},
    ],
}

export const sendNewMessage = (message):SendNewMessageTypes => ({ type: DIALOG_REDUCER_TYPES.SEND_MESSAGE, payload:message });

const dialogsReducer = (state = initialState, action:any):initialDialogsStateType => {
    switch (action.type) {
        case DIALOG_REDUCER_TYPES.SEND_MESSAGE: {
            return<initialDialogsStateType> {   // aranc es typi oshibkaya talis, baic ashxatuma
                ...state,
                messages: [...state.messages, {id:state.messages.length+1, text: action.payload}],
            };
        }
        default:
            return state;
    }
}

export default dialogsReducer;