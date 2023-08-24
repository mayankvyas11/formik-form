import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider } from '@chakra-ui/react'
import Terms from './terms&conditions';
import Disclosure from './disclosure';
import InvesterCharter from './invester-charter';
import Methodology from './methodology';
import StockCompare from './srockcompare';
import Curated from './curated';
import Technical from './technical';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ChakraProvider>
  
    <Technical />

  </ChakraProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
