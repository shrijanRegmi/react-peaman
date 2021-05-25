import firebase from "../../../configs/firebaseConfig";
import { GET_USER } from "../Users/constants";
import { throwError } from "../Error/index";

const loginUserAction = (cred) => {
  return async (dispatch) => {
    try {
      const { user } = await firebase
        .auth()
        .signInWithEmailAndPassword(cred.email, cred.password);

      const id_token = await user.getIdToken();

      const res = await fetch("http://localhost:3001/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id_token,
        }),
      });

      const currentUser = await res.json();

      dispatch({
        type: GET_USER,
        payload: {
          user: currentUser,
        },
      });
    } catch ({ message }) {
      dispatch(throwError(message));
    }
  };
};

export default loginUserAction;
