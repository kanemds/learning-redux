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
  }
})

module.exports = icecreamSlice.reducer
// name + Actions
module.exports.icecreamActions = icecreamSlice.actions