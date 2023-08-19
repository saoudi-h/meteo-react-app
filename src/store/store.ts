import { configureStore, combineReducers } from '@reduxjs/toolkit'
import weatherReducer from './reducers/weatherReducer'

const rootReducer = combineReducers({
  weatherDataListState: weatherReducer
})

const persistedState = localStorage.getItem('reduxState')
  ? JSON.parse(localStorage.getItem('reduxState')!)
  : {}

export type RootState = ReturnType<typeof rootReducer>

const store = configureStore({
  reducer: rootReducer,
  preloadedState: persistedState
})

store.subscribe(() => {
  localStorage.setItem('reduxState', JSON.stringify(store.getState()))
})

export default store
