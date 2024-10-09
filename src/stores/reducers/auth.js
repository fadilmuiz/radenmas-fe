import { LOGIN } from '../action/actionType';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // Menggunakan localStorage

const persistConfig = {
  key: 'auth', // Kunci untuk authReducer
  storage, // Penyimpanan yang digunakan
};

const initialState = {
  user: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        user: action.payload, // Simpan data pengguna
      };
    default:
      return state;
  }
};

// Menerapkan persistReducer
const persistedAuthReducer = persistReducer(persistConfig, authReducer);
export default persistedAuthReducer;
