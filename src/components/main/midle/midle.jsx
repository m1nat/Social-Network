import { Route } from "react-router";
import HeaderOfMidle from "./headerofmidle/headerofmidle";
import News from "./news/news";
import TopUser from "./topuser/topuser";
import DialogsContainer from "./dialogs/dialogsContainer";
import SuggestionUsers from '../midle/users/suggestionUsers'
import s from "./midle.module.scss";

const Midle = () => {
  return (
    <div className={s.midle}>
      <HeaderOfMidle />
      <div className={s.routeMessege}>
        <Route path="/dialogs" render={() => <DialogsContainer />} />
        <Route path="/news" render={() => <News />} />
        <Route path="/users" render={() => <SuggestionUsers />} />
      </div>
      <TopUser />
    </div>
  );
};

export default Midle;
