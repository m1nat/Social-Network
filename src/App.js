import { BrowserRouter } from "react-router-dom";
import Header from "./components/header/header.jsx";
import Main from "./components/main/main.jsx";
import "./style.scss";

const App = props => {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Main />
      </div>
    </BrowserRouter>
  );
};

export default App;
