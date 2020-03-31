import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import AppContainer from './components/AppContainer';
import * as serviceWorker from './serviceWorker';

const PRODUCTS = [
  { ref: '4141589679', price: 49.99, image: 'https://dummyimage.com/300x200/808080/000000', name: 'Football', description: 'Football product description' },
  { ref: '5766031063', price: 9.99, image: 'https://dummyimage.com/300x200/808080/000000', name: 'Baseball', description: 'Baseball product description' },
  { ref: '0137738001', price: 29.99, image: 'https://dummyimage.com/300x200/808080/000000', name: 'Basketball', description: 'Basketball product description' },
  { ref: '0593792626', price: 99.99, image: 'https://dummyimage.com/300x200/808080/000000', name: 'iPod Touch', description: 'iPod Touch product description' },
  { ref: '4363988790', price: 399.99, image: 'https://dummyimage.com/300x200/808080/000000', name: 'iPhone 5', description: 'iPhone 5 product description' },
  { ref: '5933973530', price: 199.99, image: 'https://dummyimage.com/300x200/808080/000000', name: 'Nexus 7', description: 'Nexus 7 product description' }
];

ReactDOM.render(
  <div className="container">
  <AppContainer products={PRODUCTS}/>
  </div>
 ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
