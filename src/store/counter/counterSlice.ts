// SNIPET: rxSlice 
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface CounterState {
    count: number;
    isReady: boolean;
}

const initialState: CounterState = {
 count: 5,
 isReady: false,
}

const counterSlice = createSlice({
  name: "counter",
  initialState,
  // reducers son las acciones que se mandaran a llamar, cambiaran el valor del state
  reducers: {
    initCounter(state, action: PayloadAction<number>) {
      if(state.isReady) return;

      state.count = action.payload
      state.isReady = true;
    },

    addOne(state) {
      state.count++;
    },

    substractOne(state) {
      if(state.count === 0) return;

      state.count--;
    },

    // El state siempre se debe cambiar con un action
    resetCount(state, action: PayloadAction<number>) {
      if(action.payload < 0) action.payload = 0

      state.count = action.payload;
    }
  }
});

export const {initCounter, addOne, substractOne, resetCount} = counterSlice.actions

export default counterSlice.reducer