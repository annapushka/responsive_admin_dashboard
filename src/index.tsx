import React from 'react';
import { Provider } from "mobx-react";
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import ListsStore from './store/listsStore';

const store = {
  listsStore: new ListsStore(),
}


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider {...store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);