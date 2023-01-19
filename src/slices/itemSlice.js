import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';

const itemsAdapter = createEntityAdapter();

const itemsSlice = createSlice({
    name: 'items',
    initialState: itemsAdapter.getInitialState(),
    reducers: {
        addItems: itemsAdapter.addMany,
        updateItem: itemsAdapter.updateOne,
    }
});

export const selectors = itemsAdapter.getSelectors((state) => state.items);
export const { actions } = itemsSlice;
export default itemsSlice.reducer;
