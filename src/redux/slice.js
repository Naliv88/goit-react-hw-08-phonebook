import { createSlice } from '@reduxjs/toolkit';
import { dataInitialList } from '../components/InitialConst/InitialConst';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: dataInitialList,
  reducers: {
    add: (state, action) => [...state, action.payload],
    delet: (state, action) =>
      state.filter(contact => contact.id !== action.payload),
  },
});
export const { add, delet } = contactsSlice.actions;

export const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    change: (state, action) => (state = action.payload),
  },
});
export const { change } = filterSlice.actions;
