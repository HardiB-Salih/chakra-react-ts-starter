import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";
import appReducer from "./slices/appSlice";
import authReducer from "./slices/authSlice";

// ----------------------------------------------------------------------

const RootPersistConfig = {
  key: "root",
  storage,
  keyPrefix: "redux-",
  //   whitelist: [],
  //   blacklist: [],
};

const RootReducer = combineReducers({
  app: appReducer,
  auth: authReducer,
});

export { RootPersistConfig, RootReducer };
