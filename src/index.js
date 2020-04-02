import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import AppContainer from './components/AppContainer';
import * as serviceWorker from './serviceWorker';

const PRODUCTS = [
  { ref: '4141589679', price: 50, image: 'https://dummyimage.com/300x200/808080/000000', name: 'Football', description: 'Le football futbol (dans la langue orale, par apocope, le foot), ou soccer en anglais  en Amérique du Nord),' },
  { ref: '5766031063', price: 10, image: 'https://dummyimage.com/300x200/808080/000000', name: 'Baseball', description: 'Baseball product description' },
  { ref: '0137738001', price: 30, image: 'https://dummyimage.com/300x200/808080/000000', name: 'Basketball', description: 'Basketball product description' },
  { ref: '0593792626', price: 100, image: 'https://dummyimage.com/300x200/808080/000000', name: 'iPod Touch', description: 'iPod Touch product description' },
  { ref: '4363988790', price: 400, image: 'https://dummyimage.com/300x200/808080/000000', name: 'iPhone 5', description: 'iPhone 5 product description' },
  { ref: '5933973530', price: 200, image: 'https://dummyimage.com/300x200/808080/000000', name: 'Nexus 7', description: 'Nexus 7 product description' }
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
