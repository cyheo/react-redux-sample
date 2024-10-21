import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit';

// 초기 상태 타입 정의
interface CounterState {
  value: number;
}

// 초기 상태 설정
const initialState: CounterState = {
  value: 0,
};

// Slice 생성 (Reducer + Actions)
const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

// 액션과 리듀서 내보내기
export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export const counterReducer = counterSlice.reducer;

// Redux Store 생성
export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

// RootState와 AppDispatch 타입 추론
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
