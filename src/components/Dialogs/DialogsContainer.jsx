import { sendNewMessage } from '../../redux/DialogsReducer/DialogsReducer.ts';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import {isAuthentication} from "../../hooks/isAuthentication";
import {compose} from "redux";

const mapStateToProps = ({messagesPage}) => {
    return {
        messagesPage:messagesPage,
    }
}
export default compose(
    connect(mapStateToProps,
        {sendNewMessage}),
    isAuthentication
)(Dialogs)