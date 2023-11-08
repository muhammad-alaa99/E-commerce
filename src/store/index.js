import { configureStore } from "@reduxjs/toolkit";

import Products from "./ProductSlice"; 
const store=configureStore({reducer:{Products}})

export default store;