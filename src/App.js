import { BrowserRouter } from "react-router-dom";
import Header from "./components/header/header.jsx";
import Main from "./components/main/main.jsx";
import "./style.scss";

const App = props => {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Main 
          dialog={ props.state.users.usersDialog }
          messeges={ props.state.messeges.answer }
          users={ props.state.users.userInfo }
          dispatch = { props.dispatch }
          newMessege={ props.state.messeges.newMessege }
          ask={ props.state.messeges.ask }
        />
      </div>
    </BrowserRouter>
  );
};

export default App;
