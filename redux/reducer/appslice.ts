import { TProducts } from '@/data/type.data'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type InitialState = {
  mobile: boolean,
  cart:TProducts[],

}

const initialState: InitialState = {
  mobile: false,
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
    increaseProductQuantity: (state, action) => {
      const  productId  = action.payload;
      state.cart = state.cart.map(product =>
        product.id === productId ? { ...product, quantity: product.quantity + 1,price:product.price + product.unitPrice } : product
      );
    },
    decreaseProductQuantity: (state, action) => {
      const  productId  = action.payload;
      state.cart = state.cart.map(product =>
        product.id === productId ? { ...product, quantity: product.quantity - 1,price:product.price - product.unitPrice } : product
      );
    },
    deleteProduct: (state, action) => {
      const  productId  = action.payload;
      state.cart = state.cart.filter(product => product.id !== productId);
    },
  },
})

export const { setMobile,addCartItem,increaseProductQuantity,decreaseProductQuantity,deleteProduct } = appSlice.actions
export default appSlice.reducer