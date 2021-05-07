import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import Footer from './components/Footer';
import { ContextProvider } from './SocketContext';

import './styles.css';

ReactDOM.render(
  <ContextProvider>
    <App />
    <Footer />
  </ContextProvider>,
  document.getElementById('root'),
);
