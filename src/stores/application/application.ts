import {
  Action,
  configureStore,
  createSlice,
  PayloadAction,
  ThunkAction,
} from '@reduxjs/toolkit';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';

// đang nghiên cứu lại cách tổ chức lại floder stores

export interface ICouterState {
  theme: 'light' | 'dark';
  loading: boolean;
  toggle: boolean;
  alert: {
    type: 'Success' | 'Error' | 'Warning';
    message: string;
  };
}

const initialState: ICouterState = {
  theme: 'dark',
  loading: false,
  toggle: true,
  alert: {
    type: 'Success',
    message: '',
  },
};
const applicationSlice = createSlice({
  name: 'application',
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<'light' | 'dark'>) => {
      state.theme = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setToggle: (state, action: PayloadAction<boolean>) => {
      state.toggle = action.payload;
    },
    setAlert: (
      state,
      action: PayloadAction<{
        type: 'Success' | 'Error' | 'Warning';
        message: string;
      }>,
    ) => {
      state.alert.type = action.payload.type;
      state.alert.message = action.payload.message;
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
  const currentTheme = getState().application.theme;
  if (currentTheme === 'light') dispatch(setTheme('dark'));
  else dispatch(setTheme('light'));
};
// export const setToggle = (): AppThunk => (dispatch, getState) => {
//   const currentToggle = getState().application.toggle;
// };
export const {setTheme, setLoading, setToggle, setAlert} =
  applicationSlice.actions;

export const store = configureStore({
  reducer: {
    application: applicationSlice.reducer,
  },
});
type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

export const useApplicationSelector: TypedUseSelectorHook<RootState> =
  useSelector;
export const useApplicationDispatch = () => useDispatch<AppDispatch>();
