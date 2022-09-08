const { cakeActions } = require('../cake/cakeSlice')

const createSlice = require('@reduxjs/toolkit').createSlice

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

  extraReducers: (builder) => {
    // make sure import, 
    builder.addCase(cakeActions.ordered, state => {
      state.numOfIcecream--
    })
  }
})

module.exports = icecreamSlice.reducer
// name + Actions
module.exports.icecreamActions = icecreamSlice.actions