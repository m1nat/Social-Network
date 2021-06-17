import Aside from './aside/aside';
import Midle from './midle/midle';
import NavBar from './navBar/navBar';
import s from './main.module.scss';


const Main = props => {
    return (
        <div className={ s.main }>
            <Aside users={ props.users } />
            <Midle 
            dialog= {props.dialog } 
            messeges={ props.messeges } 
            ask={ props.ask } 
            newMessege={ props.newMessege } 
            dispatch = { props.dispatch }
            />
            <NavBar />
        </div>
    )
}

export default Main;