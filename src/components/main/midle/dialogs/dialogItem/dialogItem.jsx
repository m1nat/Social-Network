import { NavLink } from 'react-router-dom';
import s from './dialogItem.module.scss';

const DialogItem = props => {
    return(
        <div className={s.dialogItem}>
            <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
        </div>
    )
};

export default DialogItem;