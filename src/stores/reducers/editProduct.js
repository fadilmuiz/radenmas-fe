import { EDIT } from "../action/actionType";

const initialState = {
  dataProduct: [],
};

const editReducer = (state = initialState, action) => {
  switch (action.type) {
    case EDIT:
      return {
        ...state,
        dataProduct: state.dataProduct.map((user) =>
          user.id === action.payload.id ? action.payload : user
        ),
      };
    default:
      return state;
  }
};

export default editReducer;
