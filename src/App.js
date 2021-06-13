import { BrowserRouter } from "react-router-dom";
import Header from "./components/header/header.jsx";
import Main from "./components/main/main.jsx";
import "./style.scss";

const App = props => {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Main dialog={props.state.dialog}
          messeges={props.state.messeges}
          users={props.state.users}
          postMessege={props.postMessege}
          newMessege = {props.state.newMessege}
          getCurrentTextMessege={props.getCurrentTextMessege}
        />
      </div>
    </BrowserRouter>
  );
};

export default App;
