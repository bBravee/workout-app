import { createSlice } from "@reduxjs/toolkit";

const favoritesSlice = createSlice({
    name: 'favorites',
    initialState: {
        names: []
    },
    reducers: {
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