import { THROW_ERROR } from "./constants";

const throwError = (message) => {
  return {
    type: THROW_ERROR,
    payload: {
      message,
    },
  };
};

export { throwError };
