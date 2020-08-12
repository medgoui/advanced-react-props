import React from 'react';
import './App.css';
import ProductTable from './components/ProductTable';
import PropTypes from 'prop-types';

const table = {
  width: "100%",
  border: "6px solid #948473",
  backgroundColor: "#FFE3C6",
  textAlign : "center"
}
const caption = {
  fontFamily: "'Rock Salt' cursive",
  padding: "20px",
  fontStyle: "italic",
  captionSide: "bottom",
  color: "#666",
  textAlign: "right",
  letterSpacing: "1px"
}

export const thTD = {
  padding: "20px",
  letterSpacing: "2px",
  border: "1px solid #948473"
}

const products = [
  {price:1200,
    name:"Ipad",
    category:"Electronics"
  },
  {
    price: 2500,
    name: "Samsung S10",
    category : "Electronics"
  },
    {
      price: 50,
      name: "Denim Jean",
      category: "Clothes"
    }
];

ProductTable.propTypes = {
  datas: PropTypes.arrayOf(PropTypes.shape({
  name: PropTypes.string,
  price: PropTypes.number,
  category: PropTypes.string
  }
  ))
}

function App() {
  return (
    <table style = {table}>
    <caption style = {caption}>Products</caption>
        <thead>
        <tr>
        <th style = {thTD}>Name</th>
        <th style = {thTD}>Price</th>
        <th style = {thTD}>Category</th>
        </tr>
        </thead>
        <tbody>
          <ProductTable datas = {products} />
        </tbody>
    </table>
  );
}



export default App;
