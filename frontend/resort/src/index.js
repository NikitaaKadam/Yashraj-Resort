import React from 'react';
import ReactDOM from 'react-dom/client';
import './aboutus.css';
import { RouterProvider } from 'react-router-dom';
import customRouter from './routing';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider  router={customRouter}/>
    
);


