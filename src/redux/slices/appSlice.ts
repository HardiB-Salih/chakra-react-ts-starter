import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AppState {
  mode: "light" | "dark" | "system";
}

const initialState: AppState = {
  mode: "light",
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    updateMode(
      state,
      action: PayloadAction<{ mode: "light" | "dark" | "system" }>
    ) {
      state.mode = action.payload.mode;
    },
  },
});

export const { updateMode } = appSlice.actions;
export default appSlice.reducer;
