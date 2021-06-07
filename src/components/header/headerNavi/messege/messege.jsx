import { NavLink } from 'react-router-dom';
import s from './messege.module.scss';

const Messege = () => {
    return(
        <div className={s.messege}>
            <p className={s.messegeText}> <NavLink to="/dialogs">Messege</NavLink> </p>
        </div>
    )
};

export default Messege;