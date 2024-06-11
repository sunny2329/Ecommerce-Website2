import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart: JSON.parse(localStorage.getItem('cart')) || [{
        id: 0,
        title: 'Sample',
        image: '',
        price: 100,
        quantity: 1,
    }]
}

export const cartSlice = createSlice({
    initialState,
    name: 'cart',
    reducers: {
        addItem: (state, action) => {
            const item = state.cart.find((item) => {
                return item.id === action.payload.id
            })
            if (item) {
                item.quantity += 1;
            } else {
                state.cart.push(action.payload)
            }
            localStorage.setItem('cart', JSON.stringify(state.cart));
        },
        increaseQuantity: (state, action) => {
            const item = state.cart.find((item) => {
                return item.id === action.payload
            })
            if (item) item.quantity++;
            localStorage.setItem('cart', JSON.stringify(state.cart));
        },
        decreaseQuantity: (state, action) => {
            const item = state.cart.find((item) => {
                return item.id === action.payload
            })
            if (item) item.quantity--;
            localStorage.setItem('cart', JSON.stringify(state.cart));
        },
        deleteItem: (state, action) => {
            state.cart = state.cart.filter((item) => item.id !== action.payload);
            localStorage.setItem('cart', JSON.stringify(state.cart));
        },
        resetCart: (state, action) => {
            state.cart = []
            localStorage.setItem('cart', JSON.stringify(state.cart));
        }
    }
})

export const { addItem, increaseQuantity, decreaseQuantity, deleteItem, resetCart } = cartSlice.actions

export default cartSlice.reducer;