import { TOrderHistory, TProducts } from "@/data/type.data";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type InitialState = {
  mobile: boolean;
  cart: TProducts[] | [];
  orderHistory: TOrderHistory[];
};

const initialState: InitialState = {
  mobile: false,
  cart: [],
  orderHistory: [],
};

const appSlice = createSlice({
  name: "app",
  initialState: initialState,
  reducers: {
    setMobile: (state, action: PayloadAction<boolean>) => {
      state.mobile = action.payload;
    },
    addCartItem: (state, action: PayloadAction<TProducts>) => {
      state.cart = [...state.cart, action.payload];
    },
    setCartItem:(state,action:PayloadAction<[]>)=>{
      state.cart = action.payload;
    },
    addOrderHistory: (state, action: PayloadAction<TOrderHistory>) => {
      state.orderHistory = [...state.orderHistory, action.payload];
    },
    increaseProductQuantity: (state, action) => {
      const productId = action.payload;
      state.cart = state.cart.map((product) =>
        product.id === productId
          ? {
              ...product,
              quantity: product.quantity + 1,
              price: product.price + product.unitPrice,
            }
          : product
      );
    },
    decreaseProductQuantity: (state, action) => {
      const productId = action.payload;
      state.cart = state.cart.map((product) =>
        product.id === productId
          ? {
              ...product,
              quantity: product.quantity - 1,
              price: product.price - product.unitPrice,
            }
          : product
      );
    },
    deleteProduct: (state, action) => {
      const productId = action.payload;
      state.cart = state.cart.filter((product) => product.id !== productId);
    },
  },
});

export const {
  setMobile,
  addCartItem,
  increaseProductQuantity,
  decreaseProductQuantity,
  deleteProduct,
  addOrderHistory,
  setCartItem
} = appSlice.actions;
export default appSlice.reducer;
