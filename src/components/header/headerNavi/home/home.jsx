import { NavLink } from 'react-router-dom';
import s from './home.module.scss';

const Home = () => {
    return(
        <div className={s.home}>
            <p className={s.homeText}> <NavLink to='/News'>Home</NavLink></p>
        </div>
    )
};

export default Home;