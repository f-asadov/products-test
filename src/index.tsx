import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';

import reportWebVitals from './reportWebVitals';
import './index.css';
import HeaderComponent from './components/header-component/header-component';
import SearchComponent from './components/search-component/search-component';
import ProductsList from './components/products-list/products-list';
import { store } from './app/store';
import AddProduct from './components/add-product/add-product';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SelectedProduct from './components/selected-product/selected-product';

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
  <Provider store={store}>
    <BrowserRouter>

      <HeaderComponent />
      <SearchComponent />
      <Routes>
        <Route path="/" element={<ProductsList />} />
        <Route path="/product/:id" element={<SelectedProduct />} />
      </Routes>

      <AddProduct />
    </BrowserRouter>


  </Provider>
);

reportWebVitals();
