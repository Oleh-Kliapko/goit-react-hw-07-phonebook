import { createSlice } from '@reduxjs/toolkit';

const initialFilter = { value: '' };

export const filterSlice = createSlice({
  name: 'filter',
  initialState: initialFilter,
  reducers: {
    setFilterValue(state, action) {
      state.value = action.payload;
    },
  },
});

export const { setFilterValue } = filterSlice.actions;
