import { configureStore } from "@reduxjs/toolkit";
import {
  useDispatch as useAppDispatch,
  useSelector as useAppSelector,
  TypedUseSelectorHook,
} from "react-redux";
import { persistStore, persistReducer } from "redux-persist";
import { RootPersistConfig, RootReducer } from "./rootReducer";

const store = configureStore({
  reducer: persistReducer(RootPersistConfig, RootReducer),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false,
    }),
});

const persistor = persistStore(store);

export type RootState = ReturnType<typeof RootReducer>;
type AppDispatch = typeof store.dispatch;

const useSelector: TypedUseSelectorHook<RootState> = useAppSelector;

const useDispatch = () => useAppDispatch<AppDispatch>();

export { store, persistor, useSelector, useDispatch };
// Assuming RootState is defined in store.ts or a similar file
