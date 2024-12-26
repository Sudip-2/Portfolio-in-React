import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: false,
}

export const infiniteSliderItems = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    makeFalse: (state) => {
      state.value = false
    },
    makeTrue: (state) => {
      state.value = true
    },
  },
})

// Action creators are generated for each case reducer function
export const { makeFalse, makeTrue } = infiniteSliderItems.actions

export default infiniteSliderItems.reducer