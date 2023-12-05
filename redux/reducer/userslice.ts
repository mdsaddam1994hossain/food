import { TProducts } from "@/data/type.data";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface TUser {
  name?: string;
  email?: string;
  image?: string;
}
type InitialState = {
  isLogin: boolean;
  token: string;
  user: TUser;
};

const initialState: InitialState = {
  isLogin: false,
  token: "",
  user: { name: "", email: "", image: "" } || null,
};

const userslice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    setIsLogin: (state, action: PayloadAction<boolean>) => {
      state.isLogin = action.payload;
    },
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
    setUser: (state, action: PayloadAction<TUser>) => {
      state.user = action.payload;
    },
  },
});

export const { setIsLogin, setToken, setUser } = userslice.actions;
export default userslice.reducer;
