import { applyMiddleware, legacy_createStore as createStore } from "redux";
import rootReducer from "./reducers/index";
import { thunk } from "redux-thunk";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root', // Kunci utama untuk seluruh state
  storage, // Menggunakan localStorage
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer, applyMiddleware(thunk));

const persistor = persistStore(store);

export { store, persistor };