import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'react-toastify/dist/ReactToastify.css';
import { ApolloClient, InMemoryCache, ApolloProvider, } from "@apollo/client";
import Modal from 'react-modal/lib/components/Modal';
import { Provider } from 'react-redux';
import store from './Redux/Store';

const client = new ApolloClient({
  uri: 'https://udemy-j7sz.onrender.com/graphql',
  cache: new InMemoryCache()
});


const root = ReactDOM.createRoot(document.getElementById('root'), Modal.setAppElement('#root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </Provider>
  </React.StrictMode>
);


reportWebVitals();
