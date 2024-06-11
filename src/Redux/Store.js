import { configureStore } from "@reduxjs/toolkit";
import ecommerce from './cart'
export const store = configureStore({
    reducer:{
        ecommerce,
    }
})