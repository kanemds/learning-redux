const redux = require('redux')
const createStore = redux.createStore

const CAKE_ORDERED = 'CAKE_ORDERED'
const CAKE_RESTOCKED = 'CAKE_RESTOCKED'

const orderCake = () => {
  return {
    type: CAKE_ORDERED,
    // quantity: 1
    payload: 1,
  }
}

const restockCake = (qty = 1) => {
  return {
    type: CAKE_RESTOCKED,
    // quantity: qty
    payload: qty
  }
}

const initialState = {
  numOfCakes: 10
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CAKE_ORDERED:
      return {
        ...state,
        // state.numOfCakes = current quantity
        numOfCakes: state.numOfCakes - 1
      }
    case CAKE_RESTOCKED:
      return {
        ...state,
        // state.numOfCakes = current quantity
        // payload = naming convention for the property that holds the actual data in a Redux action object.
        numOfCakes: state.numOfCakes + action.payload

      }
    default:
      return state
  }
}

const store = createStore(reducer)
console.log('Initial state ', store.getState())

const unsubscribe = store.subscribe(() =>
  console.log('Update state ', store.getState()))

store.dispatch(orderCake())
store.dispatch(orderCake())
store.dispatch(orderCake())
store.dispatch(restockCake(3))

unsubscribe()