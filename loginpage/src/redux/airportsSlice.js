import { createSlice } from '@reduxjs/toolkit'
import airports from '../common/consts/airports'
import { uniqueId } from 'lodash';
export const airportsSlice = createSlice({
    name: 'airport',
    initialState: {
        list: [],
        selectedAirport: null,
    },
    reducers: {
        loadAirports: state => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            state.list = airports.map((airport) => ({ ...airport, airportId: uniqueId() }))
        },
        deleteAirports: state => {
            state.list = [];
        },
        setSelectedAirport: (state, value) => {
            state.selectedAirport = value.payload;
        },
        removeAirport: (state, value) => {
            state.list = state.list.filter((airportFromRedux) => airportFromRedux.airportId !== value.payload.airportId);
        },
    }
})

// Action creators are generated for each case reducer function
export const { loadAirports, deleteAirports, setSelectedAirport, removeAirport } = airportsSlice.actions

export default airportsSlice.reducer