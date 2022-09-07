const redux = require('redux')
const createStore = redux.createStore
const produce = require('immer').produce


const initialState = {
  name: 'Kan',
  address: {
    street: '123 Main St',
    city: 'Boston',
    state: 'MA'
  }
}

// action name
const STREET_UPDATED = 'STREET_UPDATED'

// action creator
const updateStreet = (street) => {
  return {
    type: STREET_UPDATED,
    payload: street,
  }
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case STREET_UPDATED:

      // return {
      //   // copy state
      //   ...state,
      //   address: {
      //     // copy state
      //     ...state.address,
      //     // only update street
      //     street: action.payload
      //   }
      // }

      // immer helps directly update the state
      return produce(state, (draft) => {
        draft.address.street = action.payload
      })

    default: {
      return state
    }
  }
}

const store = createStore(reducer)
console.log('InitialState', store.getState())

const unsubscribe = store.subscribe(() => {
  console.log('Updated Street Name', store.getState())
})

store.dispatch(updateStreet('456 Main St'))

unsubscribe()