import { GET_USER } from "./constants";

const getUserAction = (uid) => {
  return (dispatch) => {
    fetch(`http://localhost:3001/users/${uid}`)
      .then((res) => res.json())
      .then((res) => { 
        dispatch({
          type: GET_USER,
          payload: {
            user: res,
          },
        });
      })
      .catch((e) => console.log("Error!!!: Getting user", e));
  };
};

export { getUserAction };
