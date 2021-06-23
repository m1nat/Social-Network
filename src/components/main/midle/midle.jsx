import HeaderOfMidle from "./headerofmidle/headerofmidle";
import News from "./news/news";
import TopUser from "./topuser/topuser";
import DialogsContainer from "./dialogs/dialogsContainer";
import s from "./midle.module.scss";
import { Route } from "react-router";

const Midle = props => {
  return (
    <div className={s.midle}>
      <HeaderOfMidle />
      <div className={s.routeMessege}>
        <Route path="/dialogs" render={() => 
        <DialogsContainer
          dialog={ props.dialog }
          messeges={ props.messeges }
          newMessege={ props.newMessege } 
          dispatch = { props.dispatch }
          ask={ props.ask }
          />} 
        />
        <Route path="/news" render={() => <News />} />
      </div>
      <TopUser />
    </div>
  );
};

export default Midle;
