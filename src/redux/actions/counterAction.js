import * as types from "./actionTypes"
export function setCounter(counter) {
  return {
    type: types.COUNTER,
    counter,
  }
}
