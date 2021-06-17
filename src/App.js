import { BrowserRouter } from "react-router-dom";
import Header from "./components/header/header.jsx";
import Main from "./components/main/main.jsx";
import "./style.scss";

const App = props => {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Main dialog={ props.state.dialog }
          messeges={ props.state.messeges }
          users={ props.state.users }
          dispatch = { props.dispatch }
          newMessege={ props.state.newMessege }
          ask={ props.state.ask }
        />
      </div>
    </BrowserRouter>
  );
};

export default App;
