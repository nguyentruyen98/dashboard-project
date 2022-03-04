import {
  Action,
  configureStore,
  createSlice,
  PayloadAction,
  ThunkAction,
} from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

// đang nghiên cứu lại cách tổ chức lại floder stores

export interface ICouterState {
  value: number;
  status: "idle" | "loading" | "failed";
  theme: "light" | "dark";
}

const initialState: ICouterState = {
  value: 0,
  status: "idle",
  theme: "light",
};
const couterSlice = createSlice({
  name: "couter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    setTheme: (state, action: PayloadAction<"light" | "dark">) => {
      state.theme = action.payload;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
export const changeTheme = (): AppThunk => (dispatch, getState) => {
  const currentTheme = getState().couter.theme;
  if (currentTheme === "light") dispatch(setTheme("dark"));
  dispatch(setTheme("light"));
};
export const { increment, decrement, incrementByAmount, setTheme } =
  couterSlice.actions;

export const store = configureStore({
  reducer: {
    couter: couterSlice.reducer,
  },
});
type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();
