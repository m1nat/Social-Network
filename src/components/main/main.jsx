import Aside from './aside/aside';
import Midle from './midle/midle';
import NavBar from './navBar/navBar';
import s from './main.module.scss';


const Main = props => {
    return (
        <div className={s.main}>
            <Aside users={props.users} />
            <Midle dialog={props.dialog} messeges={props.messeges} postMessege={props.postMessege} newMessege={props.newMessege} getCurrentTextMessege={props.getCurrentTextMessege}/>
            <NavBar />
        </div>
    )
}

export default Main;