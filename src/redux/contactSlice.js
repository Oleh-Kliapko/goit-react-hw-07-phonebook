import { createSlice, nanoid } from '@reduxjs/toolkit';

const contacts = {
  items: [
    { id: 'id-1', name: 'Rosie Simpson', number: '4591256' },
    { id: 'id-2', name: 'Hermione Kline', number: '4438912' },
    { id: 'id-3', name: 'Eden Clements', number: '6451779' },
    { id: 'id-4', name: 'Annie Copeland', number: '2279126' },
  ],
  isLoading: false,
  error: null,
};

export const contactSlice = createSlice({
  name: 'contact',
  initialState: contacts,
  reducers: {
    addContact(state, action) {
      const { name, number } = action.payload;
      state.items.push({ id: nanoid(4), name, number });
    },

    removeContact(state, action) {
      const index = state.items.findIndex(
        contact => contact.id === action.payload
      );
      state.items.splice(index, 1);
    },
  },
});

export const { addContact, removeContact } = contactSlice.actions;
