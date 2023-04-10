import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App';
import { store } from './store/store';
import { Provider } from 'react-redux';
import './index.css';
import { ErrorBoundary } from 'react-error-boundary';
import { fallbackRender } from './components/FallbackRender/FallbackRender';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <ErrorBoundary fallbackRender={fallbackRender}>
    <Provider store={store}>
      <App />
    </Provider>
  </ErrorBoundary>
);
