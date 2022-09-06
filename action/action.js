const CAKE_ORDERED = 'CAKE_ORDERED'




// action creater = function return an object

function orderCake() {
  return {
    // action = object with 'type' property
    type: CAKE_ORDERED,
    quantity: 1
  }
}