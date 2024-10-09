import { combineReducers } from "redux";
import userReducer from "./user";
import detailReducer from "./detail";
import categoryReducer from "./category";
import categoryDetailReducer from "./categoryDetail";
import detailImageReducer from "./detailImage";
import authReducer from "./auth";
import editReducer from "./editProduct";


const rootReducer = combineReducers({
  user: userReducer,
  detail: detailReducer,
  category: categoryReducer,
  detailCategory: categoryDetailReducer,
  detailImage: detailImageReducer,
  auth: authReducer,
  edit: editReducer,
  });

export default rootReducer;