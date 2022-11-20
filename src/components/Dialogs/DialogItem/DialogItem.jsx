import { NavLink } from 'react-router-dom'
import classes from './DialogItem.module.css'
import {imagePathGenerator} from "../../../utils/general";




const DialogItem = (props) => {
    return (
        <div className={`${classes.dialog} ${classes.active}`}>
        <img src={imagePathGenerator(props.ava)} />
            <NavLink to={`/dialogs/${props.id}`}>{props.name}</NavLink>
        </div>
    )
}


export default DialogItem;