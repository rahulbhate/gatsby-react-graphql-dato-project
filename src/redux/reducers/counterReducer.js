import initialState from "./initialState"
import * as types from "../actions/actionTypes"

export default function counterReducer(state = initialState.counter, action) {
  switch (action.type) {
    case types.COUNTER:
      console.log(action.counter)
      return [...state, { ...action.counter }]

    default:
      return state
  }
}
