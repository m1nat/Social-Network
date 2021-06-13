import HeaderOfMidle from "./headerofmidle/headerofmidle";
import News from "./news/news";
import TopUser from "./topuser/topuser";
import Dialogs from "./dialogs/dialogs";
import s from "./midle.module.scss";
import { Route } from "react-router";

const Midle = props => {
  return (
    <div className={s.midle}>
      <HeaderOfMidle />
      <div className={s.routeMessege}>
        <Route path="/dialogs" render={() => 
        <Dialogs
          dialog={props.dialog}
          messeges={props.messeges}
          postMessege={props.postMessege}
          newMessege={props.newMessege} 
          getCurrentTextMessege={props.getCurrentTextMessege}/>} 
        />
        <Route path="/news" render={() => <News />} />
      </div>
      <TopUser />
    </div>
  );
};

export default Midle;
