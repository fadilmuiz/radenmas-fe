import { USER_SET } from "../action/actionType";

const initialState = {
  users: [],
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_SET:
      return {
        ...state,
        users: action.payload,
      };
    default:
      return state;
  }
}

export default userReducer;
