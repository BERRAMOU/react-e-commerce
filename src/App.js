import React from 'react';
import './App.css';
import Products from './components/Products';

import img1 from './images/img1.jpg';
import img2 from './images/img2.jpg';
import img3 from './images/img3.jpg';
import img4 from './images/img4.jpg';
import img5 from './images/img5.jpg';
import img6 from './images/img6.jpg';
import img7 from './images/img7.jpg';
import img8 from './images/img8.jpg';
import img9 from './images/img9.jpg';
import img10 from './images/img10.jpg';

const products = [
    { ref: 987654321, name:'Product 1', image: img1, price: 10, description: "Lorem ipsum product 1." },
    { ref: 987654322, name:'Product 2', image: img2, price: 20, description: "Lorem ipsum product 2." },
    { ref: 987654323, name:'Product 3', image: img3, price: 30, description: "Lorem ipsum product 3." },
    { ref: 987654324, name:'Product 4', image: img4, price: 40, description: "Lorem ipsum product 4." },
    { ref: 987654325, name:'Product 5', image: img5, price: 50, description: "Lorem ipsum product 5." },
    { ref: 987654326, name:'Product 6', image: img6, price: 60, description: "Lorem ipsum product 6." },
    { ref: 987654327, name:'Product 7', image: img7, price: 70, description: "Lorem ipsum product 7." },
    { ref: 987654328, name:'Product 8', image: img8, price: 80, description: "Lorem ipsum product 8." },
    { ref: 987654329, name:'Product 9', image: img9, price: 90, description: "Lorem ipsum product 9." },
    { ref: 9876543210, name:'Product 10', image: img10, price: 100, description: "Lorem ipsum product 10." },
];

function App() {
  return (
    <Products products={products} />
  );
}

export default App;
