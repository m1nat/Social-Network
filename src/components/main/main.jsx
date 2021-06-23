import Aside from './aside/aside';
import Midle from './midle/midle';
import NavBar from './navBar/navBar';
import s from './main.module.scss';


const Main = () => {
    return (
        <div className={ s.main }>
            <Aside />
            <Midle />
            <NavBar />
        </div>
    )
}

export default Main;