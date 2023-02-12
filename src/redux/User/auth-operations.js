import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const register = createAsyncThunk('auth/signup', async credentials => {
  try {
    const { data } = await axios.post('/users/signup', credentials);
    console.log(data);
    token.set(data.token);
    return data;
  } catch (error) {
    console.log(error);
  }
});

export const login = createAsyncThunk('auth/login', async loginInfo => {
  try {
    const { data } = await axios.post('/users/login', loginInfo);
    token.set(data.token);
    return data;
  } catch (error) {
    console.log(error);
  }
});

export const logout = createAsyncThunk('auth/logout', async () => {
  try {
    await axios.post('/users/logout');
    token.unset();
  } catch (error) {
    console.log(error);
  }
});

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }

    try {
      token.set(persistedToken);
      const response = await axios.get('/users/current');
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);
