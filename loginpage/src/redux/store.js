import { configureStore } from '@reduxjs/toolkit'
import airportsSlice from '../../src/redux/airportsSlice'

export default configureStore({
    reducer: {
        airports: airportsSlice
    }
})