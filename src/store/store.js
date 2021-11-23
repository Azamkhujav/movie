import { configureStore } from '@reduxjs/toolkit'
import dataReducer from './counterslice'
export default configureStore({
    reducer: {
        counter: dataReducer
    },
  })