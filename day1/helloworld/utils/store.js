const redux = require('./redux.js')
const store = redux.createStore(function counter(state = {
  name: 'Yao'
}, action) {
  switch (action.type) {
    case 'GETNAME':
      return {...state}
    case 'DECREMENT':
      return state - 1
    default:
      return state
  }
})
module.exports = store