import { THROW_ERROR } from "../../actions/Error/constants";

const initState = { message: "" };

const errorReducer = (state = initState, action) => {
  const { payload } = action;
  if (action.type === THROW_ERROR) return { message: payload.message };
  return state;
};

export default errorReducer;
