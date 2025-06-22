"use client"
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    carts: []
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addCart: (state, action) => {
    const { _id, title, price, quantity, color, img } = action.payload;
    
    const existingItem = state.carts.find(item => item._id === _id);
    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        state.carts.push({ _id, title, price, quantity, color, img });
    }
},
    removeCart: (state,action) => {
        state.carts = state.carts.filter((c) => c._id !== action.payload)
    },
     increaseQty: (state, action) => {
    const item = state.carts.find((c) => c._id === action.payload);
    if (item) {
      item.quantity += 1;
    }
  },
  decreaseQty: (state, action) => {
    const item = state.carts.find((c) => c._id === action.payload);
    if (item && item.quantity > 1) {
      item.quantity -= 1;
    }},
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { addCart, removeCart, increaseQty, incrementByAmount, decreaseQty } = cartSlice.actions

export default cartSlice.reducer