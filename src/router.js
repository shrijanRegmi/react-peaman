import Login from "./pages/Auth/login";
import Chat from "./pages/Chat";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignUp from "./pages/Auth/signup";

const routes = [
  {
    exact: true,
    path: "/",
    component: Login,
  },
  {
    exact: true,
    path: "/login",
    component: Login,
  },
  {
    exact: true,
    path: "/signup",
    component: SignUp,
  },
  {
    exact: true,
    path: "/chats",
    component: Chat,
  },
];

const MyRouter = () => {
  return (
    <Router>
      <Switch>
        {routes.map((itm) => {
          return (
            <Route
              path={itm.path}
              exact={itm.exact}
              component={itm.component}
            />
          );
        })}
      </Switch>
    </Router>
  );
};

export default MyRouter;
