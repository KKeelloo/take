import './App.css';
import ProductList from './ProductList';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  } from "react-router-dom";
  
import ProductDetails from './ProductDetails';

function App() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('https://dummyjson.com/products');
      setProducts(response.data.products);
    }
    fetchData();
  }, []);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/"
            element={<ProductList products={products} />} />
        <Route path="details/:id"
            element={<ProductDetails products={products} />} />
      </>
    )
  );

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
