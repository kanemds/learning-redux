const redux = require('redux')
const createStore = redux.createStore

const CAKE_ORDERED = 'CAKE_ORDERED'

// action creater
function orderCake() {
  return {
    // action name
    type: CAKE_ORDERED,
    // extra
    quantity: 4,
  }
}

// sotre need to be object
const initialState = {
  numOfCakes: 10,
  // example
  numOfemployees: 100,
  Cashflow: 10000
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CAKE_ORDERED:
      return {
        // copy all the state from initialState object
        ...state,
        // change state
        numOfCakes: state.numOfCakes - 1,
      }
    default:
      return state
  }
}

// store

const store = createStore(reducer)
// getState
// It helps you retrieve the current state of your Redux store.

console.log('Initial state', store.getState())

const unsubscribe = store.subscribe(() =>
  console.log('Update state', store.getState())
)

// dispatch
// It allows you to dispatch an action to change a state in your application.
store.dispatch(orderCake())
store.dispatch(orderCake())

unsubscribe()

// won't see
store.dispatch(orderCake())
unsubscribe()

// subscribe
// It helps you register a callback that Redux store will call when an action has been dispatched. As soon as the Redux state has been updated, the view will re-render automatically.

// The syntax for dispatch is as follows −

// store.subscribe(()=>{ console.log(store.getState());})
// Note that subscribe function returns a function for unsubscribing the listener. To unsubscribe the listener, we can use the below code −

// const unsubscribe = store.subscribe(()=>{console.log(store.getState());});
// unsubscribe();