import { GET_USER } from "../../actions/Users/constants";

const initState = {
  user: {},
};

const userReducer = (state = initState, action) => {
  const { payload } = action;
  switch (action.type) {
    case GET_USER:
      return {
        ...state,
        user: payload.user,
      };
    default:
      return state;
  }
};

export default userReducer;
