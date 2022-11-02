import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    fname: '',
    lname: '',
    email: '',
    password: '',
  },
  reducers: {
    update: (state, action) => {
      // state.fname = action.payload.fname;
      // state.lname = action.payload.lname;
      // state.email = action.payload.email;
      // state.password = action.payload.password;
    },
  },
});

export const { update } = userSlice.actions;
export default userSlice.reducer;
