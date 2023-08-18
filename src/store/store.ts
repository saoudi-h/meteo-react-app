import { configureStore, combineReducers } from '@reduxjs/toolkit'
import weatherReducer from './reducers/weatherReducer'

const rootReducer = combineReducers({
  weatherDataListState: weatherReducer
})

export type RootState = ReturnType<typeof rootReducer>

const store = configureStore({
  reducer: rootReducer
})

export default store
