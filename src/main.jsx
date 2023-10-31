import React from 'react';
import ReactDOM from 'react-dom/client';
import { BuscadorFacturas } from './01-Buscador/BuscadorFacturas.jsx';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    {/* <React.StrictMode> */}
      <BuscadorFacturas />
    {/* </React.StrictMode> */}
  </BrowserRouter>
)
