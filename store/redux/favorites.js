// Slice defining - redux toolkit feature to define some states, data and actions to change that data

import { createSlice } from "@reduxjs/toolkit";

const favoritesSlice = createSlice({
    name: 'favorites',
    initialState: {
        names: []
    },
    reducers: {
        // Otrzymują ostatni stan jako parametr
        addFavorite: (state, action) => {
            state.names.push(action.payload.name );
        },
        removeFavorite: (state, action) => {
            state.names.splice(state.names.indexOf(action.payload.name), 1);
        }
    }
});

export const addFavorite = favoritesSlice.actions.addFavorite;
export const removeFavorite = favoritesSlice.actions.removeFavorite;
export default favoritesSlice.reducer;