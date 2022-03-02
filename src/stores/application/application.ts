import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

// đang nghiên cứu lại cách tổ chức lại floder stores

export interface ICouterState {
    value: number,
    status: 'idle' | 'loading' | 'failed'
}

const initialState: ICouterState = {
    value: 0,
    status: 'idle'
}
const couterSlice = createSlice({
    name: 'couter',
    initialState,
    reducers: {
        increment: (state) => { state.value += 1 },
        decrement: (state) => { state.value -= 1 },
        incrementByAmount: (state, action: PayloadAction<number>) => {
            state.value += action.payload;
        },
    },
})

export const { increment, decrement } = couterSlice.actions

export const store = configureStore({
    reducer: {
        couter: couterSlice.reducer
    }
})
type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();
