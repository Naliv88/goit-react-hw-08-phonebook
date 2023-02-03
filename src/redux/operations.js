import axios from "axios";
import { createAsyncThunk } from '@reduxjs/toolkit';

const axiosFetch = axios.create({baseURL: 'https://63d4efda0e7ae91a00a4e682.mockapi.io/contacts'})

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosFetch.get(
        ''
        );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async ({ name, phone }, { rejectWithValue }) => {
    try {
      const response = await axiosFetch.post(
        '',
        { name, phone }
      );
      return response.data;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async function (id, { rejectWithValue }) {
    try {
      const response = await axiosFetch.delete(
        `/${id}`
      );
      return response.data;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);