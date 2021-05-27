import { throwError } from "../Error";
import { GET_USER, SEARCH_USERS, UPDATE_USER_LOADER } from "./constants";

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

const searchUsersAction = (keyword) => {
  return (dispatch, getState) => {
    dispatch(updateUserLoaderAction({ isSearchingUser: true }));
    const {
      usersReducer: { user },
    } = getState();

    fetch(`http://localhost:3001/search?keyword=${keyword}`)
      .then((res) => res.json())
      .then(({ users }) => {
        dispatch({
          type: SEARCH_USERS,
          payload: {
            searchedUsers: users.filter((itm) => itm.uid !== user.uid),
          },
        });
        dispatch(updateUserLoaderAction({ isSearchingUser: false }));
      })
      .catch(({ message }) => {
        dispatch(throwError(message));
      });
  };
};

const updateUserLoaderAction = ({ isSearchingUser }) => {
  return {
    type: UPDATE_USER_LOADER,
    payload: {
      isSearchingUser,
    },
  };
};

export { getUserAction, searchUsersAction, updateUserLoaderAction };
