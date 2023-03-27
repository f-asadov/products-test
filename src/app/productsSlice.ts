import { createSlice } from "@reduxjs/toolkit";
import {IProductsResponse } from '../components/interfaces/interfaces'




const productsSlice = createSlice({
  name: 'products',
  initialState: {
    allProducts: [] as IProductsResponse[],
    filteredProducts: [] as IProductsResponse[],
    productsAfterDelete:[] as IProductsResponse[]
  },
  reducers: {
    setProducts: (state, action) => {
      state.allProducts = action.payload;
      state.filteredProducts = action.payload; 
      state.productsAfterDelete = action.payload
    },
    setFilteredProducts: (state, action) => {
      state.filteredProducts = action.payload;
    },
  
  },
});


export const { setProducts, setFilteredProducts} = productsSlice.actions;
export const productsReducer = productsSlice.reducer;
export default productsSlice.reducer;