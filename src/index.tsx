import React from 'react';
import { Provider } from "mobx-react";
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import "./i18n";


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider>
    <React.Suspense fallback="loading">
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </React.Suspense>
  </Provider>
);