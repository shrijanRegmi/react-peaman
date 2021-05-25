import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "./styles/variables.scss";
import MyRouter from "./router";
import ErrorComponent from "./components/Common/Error/error";

function App() {
  return (
    <div className="App">
      <ErrorComponent />
      <MyRouter />
    </div>
  );
}

export default App;
