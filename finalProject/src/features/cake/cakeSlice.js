import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  numOfCake: 10
}


// automatically generates action creators and action type

// const ordered = (qty = 1) => {
//   return {
//     type: CAKE_ORDERED,
//     payload: qty
//   }
// }

// slice function takes: initial state, reducer function, slice name

const cakeSlice = createSlice({
  // slice name
  name: 'cake',
  // initial state
  initialState,
  // reducer function
  reducers: {
    ordered: (state) => {
      state.numOfCake--
    },
    restocked: (state, action) => {
      state.numOfCake += action.payload || 1
    }
  }
})

export default cakeSlice.reducer
export const { ordered, restocked } = cakeSlice.actions