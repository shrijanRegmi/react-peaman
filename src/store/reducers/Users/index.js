import {
  GET_USER,
  SEARCH_USERS,
  UPDATE_USER_LOADER,
} from "../../actions/Users/constants";

const initState = {
  user: {},
  isSearchingUser: false,
  searchedUsers: [],
};

const userReducer = (state = initState, action) => {
  const { payload } = action;
  switch (action.type) {
    case GET_USER:
      return {
        ...state,
        user: payload.user,
      };
    case SEARCH_USERS:
      return {
        ...state,
        searchedUsers: payload.searchedUsers,
      };
    case UPDATE_USER_LOADER:
      return {
        ...state,
        isSearchingUser:
          payload.isSearchingUser !== undefined
            ? payload.isSearchingUser
            : state.isSearchingUser,
      };
    default:
      return state;
  }
};

export default userReducer;
