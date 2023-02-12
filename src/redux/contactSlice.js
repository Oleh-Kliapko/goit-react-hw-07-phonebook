import { createSlice } from '@reduxjs/toolkit';
import { API } from './operations';

const contacts = {
  items: [],
  isLoading: false,
  error: null,
};

const onPending = state => {
  state.isLoading = true;
};
const onRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const contactSlice = createSlice({
  name: 'contact',
  initialState: contacts,
  extraReducers: {
    [API.fetchContacts.pending]: onPending,
    [API.fetchContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [API.fetchContacts.rejected]: onRejected,

    [API.addContact.pending]: onPending,
    [API.addContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items.unshift(action.payload);
    },
    [API.addContact.rejected]: onRejected,

    [API.deleteContact.pending]: onPending,
    [API.deleteContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      // state.items.filter(item => item.id !== action.payload);
      const index = state.items.findIndex(({ id }) => id === action.payload.id);
      state.items.splice(index, 1);
    },
    [API.deleteContact.rejected]: onRejected,
  },
});

export const contactReducer = contactSlice.reducer;
