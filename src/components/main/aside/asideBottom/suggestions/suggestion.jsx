import { NavLink } from 'react-router-dom';
import s from './suggestion.module.scss';

const Suggestions = () => {
    return(
        <div className={s.suggestions}>
            <p className={s.suggestionsTitle}><NavLink to="/users">Suggestions:</NavLink></p>
        </div>
    )
};

export default Suggestions;