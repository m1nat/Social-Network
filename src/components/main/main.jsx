import Aside from './aside/aside';
import Midle from './midle/midle';
import NavBar from './navBar/navBar';
import s from './main.module.scss';


const Main = props => {
    return (
        <div className={s.main}>
            <Aside SuggestionUsers={props.state}/>
            <Midle   dialogsData={props.state} messeges={props.state}/>
            <NavBar />
        </div>
    )
}

export default Main;