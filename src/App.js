import React from 'react'
import FilterableProductTable from './components/FilterableProductTable';

const PRODUCTS = [
  {category: 'Sporting Goods', price: '$49.99',  name: 'Football'},
  {category: 'Sporting Goods', price: '$9.99',  name: 'Baseball'},
  {category: 'Sporting Goods', price: '$29.99', name: 'Basketball'},
  {category: 'Electronics', price: '$99.99',  name: 'iPod Touch'},
  {category: 'Electronics', price: '$399.99',  name: 'iPhone 5'},
  {category: 'Electronics', price: '$199.99',  name: 'Nexus 7'}
];


function App() {
  return (
    <div className='App'>
      <FilterableProductTable  products={PRODUCTS}/>
    </div>
  );
}




export default App;
