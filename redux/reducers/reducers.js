
// create aa const is because in real life it would be easy to do name change when the file gets bigger
const CAKE_ORDERED = 'CAKE_ORDER'

// the shop has total of 10 cakes 
const initialState = {
  numOfCakes: 10,
  anotherProperty: 0 // this remain unchange
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CAKE_ORDERED:
      return {
        ...state, // make a copy and only change if it's needed
        numOfCakes: state.numOfCakes - 1
      }
    default:
      return state
  }
}

