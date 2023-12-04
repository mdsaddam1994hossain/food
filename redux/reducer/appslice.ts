import { TProducts } from '@/data/type.data'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type InitialState = {
  mobile: boolean,
  isLogin:boolean,
  cart:TProducts[],

}

const initialState: InitialState = {
  mobile: false,
  isLogin:false,
  cart:[]
}

const appSlice = createSlice({
  name: 'app',
  initialState: initialState,
  reducers: {
    setMobile: (state, action: PayloadAction<boolean>) => {
      state.mobile = action.payload
    },
    addCartItem: (state, action: PayloadAction<TProducts>) => {
      state.cart = [...state.cart, action.payload]
    },
  },
})

export const { setMobile,addCartItem } = appSlice.actions
export default appSlice.reducer