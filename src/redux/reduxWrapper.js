import React from "react"
import configureStore from "./configureStore"
import { Provider } from "react-redux"

const store = configureStore()

export default ({ element }) => <Provider store={store}>{element}</Provider>
