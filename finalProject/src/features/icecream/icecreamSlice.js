import { createSlice } from '@reduxjs/toolkit'
import { ordered as cakeOrdered } from '../cake/cakeSlice'


const initialState = {
  numOfIcecream: 20
}

const icecreamSlice = createSlice({
  name: 'icecream',
  initialState,
  reducers: {
    ordered: state => {
      state.numOfIcecream--
    },
    restocked: (state, action) => {
      state.numOfIcecream += action.payload || 1
    }
  },
  // when action [cake/order] state update, numOfIceCream decrement by 1
  // extraReducers: {
  //   // name/action
  //   ['cake/ordered']: (state) => {
  //     state.numOfIcecream--
  //   }
  // }


  // recommanded
  extraReducers: (builder) => {
    // make sure import, 
    builder.addCase(cakeOrdered, state => {
      state.numOfIcecream--
    })
  }
})

export default icecreamSlice.reducer
// name + Actions
export const { ordered, restocked } = icecreamSlice.actions