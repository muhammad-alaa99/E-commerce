import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  records: [],
  record: [],
  cart: [],
  items: [],
};

export const fetchProducts = createAsyncThunk(
  "Products/fetchProducts",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const getProduct = createAsyncThunk(
  "Products/getProduct",
  async (id, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await fetch(`https://fakestoreapi.com/products/${id}`);
      const data = await res.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const productSlice = createSlice({
  name: "Products",
  initialState,
  reducers: {
    All: (state) => {
      state.items = state.records;
    },
    man: (state, action) => {
      state.items = state.records.filter(
        (item) => item.category === action.payload
      );
    },
    woman: (state, action) => {
      state.items = state.records.filter(
        (item) => item.category === action.payload
      );
    },
    jewelery: (state, action) => {
      state.items = state.records.filter(
        (item) => item.category === action.payload
      );
    },
    electronics: (state, action) => {
      state.items = state.records.filter(
        (item) => item.category === action.payload
      );
    },
    pluseItem: (state, action) => {
      const item = state.cart.find(
        (product) => product.id === action.payload.id
      );
      item.quantity += 1;
    },
    minasItem: (state, action) => {
      const item = state.cart.find(
        (product) => product.id === action.payload.id
      );
      item.quantity -= 1;
      if (item.quantity < 1) {
        state.cart = state.cart.filter((el) => el.id !== action.payload.id);
      }
    },
    removeItem: (state, action) => {
      state.cart = state.cart.filter((el) => el.id !== action.payload.id);
    },
    clearCart: (state) => {
      state.cart = [];
    },
    Details: (state, action) => {
      state.record = state.records.filter((el) => el.id === action.payload.id);
    },
    clearRecord: (state) => {
      state.record = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.records = action.payload;
        state.items = action.payload;
      })
      .addCase(fetchProducts.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getProduct.fulfilled, (state, action) => {
        const productIndex = state.cart.findIndex(
          (item) => item.id === action.payload.id
        );
        if (productIndex > -1) {
          state.cart[productIndex].quantity += 1;
        } else {
          const cartClone = { ...action.payload };
          cartClone.quantity = 1;
          state.cart.push(cartClone);
        }
      });
  },
});

export const {
  All,
  man,
  woman,
  electronics,
  jewelery,
  pluseItem,
  minasItem,
  removeItem,
  clearCart,
  Details,
  clearRecord,
} = productSlice.actions;
export default productSlice.reducer;
