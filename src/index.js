import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import '@shopify/polaris/build/esm/styles.css';
import enTranslations from '@shopify/polaris/locales/en.json';
import { AppProvider } from '@shopify/polaris';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './components/redux/store';



ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <AppProvider i18n={enTranslations}>
          <App />
      </AppProvider>
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);


