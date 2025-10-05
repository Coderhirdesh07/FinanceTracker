import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  status: false,
  /**
   * userData shape example:
   * {
   *   id: string,
   *   name: string,
   *   email: string,
   *   // any other user fields
   * }
   */
  userData: null,
};
function loginUser(state, actions) {
  state.status = true;
  state.userData = actions.payload;
}
function logoutUser(state, actions) {
  state.status = false;
  state.userData = null;
}
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: loginUser,
    logout: logoutUser,
  },
});
export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
