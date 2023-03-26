import { createSlice } from "@reduxjs/toolkit";
import { IProducts, IProductsResponse } from '../components/interfaces/interfaces'




const counterSlice = createSlice({
  name: 'counter',
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


export const { setProducts, setFilteredProducts} = counterSlice.actions;
export const counterReducer = counterSlice.reducer;
export default counterSlice.reducer;