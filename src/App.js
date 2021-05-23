import "./App.css";
import Chat from "./pages/Chat/index";
import "bootstrap/dist/css/bootstrap.css";
import "./styles/variables.scss";
import MyRouter from "./router";

function App() {
  return (
    <div className="App">
      <MyRouter />
    </div>
  );
}

export default App;
