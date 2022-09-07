const redux = require('redux')
const createStore = redux.createStore
const bindActionCreators = redux.bindActionCreators
const combineReducers = redux.combineReducers
const produce = require('immer').produce

// need to require before logger
const applyMiddleware = redux.applyMiddleware

const reduxLogger = require('redux-logger')
const logger = reduxLogger.createLogger()

const CAKE_ORDERED = 'CAKE_ORDERED'
const CAKE_RESTOCKED = 'CAKE_RESTOCKED'
const ICECREAM_ORDERED = 'ICECREAM_ORDERED'
const ICECREAM_RESTOCKED = 'ICECREAM_RESTOCKED'

// action creator
const orderCake = (qty = 1) => {
  return {
    type: CAKE_ORDERED,
    payload: qty
  }
}

const restockCake = (qty = 1) => {
  return {
    type: CAKE_RESTOCKED,
    payload: qty
  }
}

const orderIceCream = (qty = 1) => {
  return {
    type: ICECREAM_ORDERED,
    payload: qty
  }
}

const restockIceCream = (qty = 1) => {
  return {
    type: ICECREAM_RESTOCKED,
    payload: qty
  }
}

// created initial value
const initialCakeState = {
  numOfCakes: 10,
}

const initialIceCreamState = {
  numOfIceCream: 20
}

// reducers
const cakeReducer = (state = initialCakeState, action) => {
  switch (action.type) {
    case CAKE_ORDERED:
      return produce(state, (draft) => {
        draft.numOfCakes = state.numOfCakes - action.payload
      })
    case CAKE_RESTOCKED:
      return produce(state, (draft) => {
        draft.numOfCakes = state.numOfCakes + action.payload
      })
    default: {
      return state
    }
  }
}

const IceCreamReducer = (state = initialIceCreamState, action) => {
  switch (action.type) {
    case ICECREAM_ORDERED:
      return produce(state, (draft) => {
        draft.numOfIceCream = state.numOfIceCream - action.payload
      })
    case ICECREAM_RESTOCKED:
      return produce(state, (draft) => {
        draft.numOfIceCream = state.numOfIceCream + action.payload
      })
    default: {
      return state
    }
  }
}

// combineReducers
const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: IceCreamReducer
})

// print
const store = createStore(rootReducer, applyMiddleware(logger))
console.log('InitialState', store.getState())

const unsubscribe = store.subscribe(() => { })

const actions = bindActionCreators({ orderCake, restockCake, orderIceCream, restockIceCream }, store.dispatch)
actions.orderCake()
actions.orderCake(3)
actions.restockCake(3)
actions.orderIceCream(6)
actions.restockIceCream(3)


unsubscribe()