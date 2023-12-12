import React from "react";
import products from "../../data/products";
import "./ProductsTable.css";

export default (props) => {

  function getProducts() {
    return products.map((product, i) => {
      return (
        <tr key={product.id} className={i % 2 == 0 ? "Pair" : "Odd"}>
          <td>{product.id}</td>
          <td>{product.name}</td>
          <td>$ {product.price.toFixed(2)}</td>
        </tr>
      );
    });
  }

  return (
    <div className="ProductsTable">
      <table border="1">
        <thead>
          <tr>
            <th>Id</th>
            <th>Product</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{getProducts()}</tbody>
      </table>
    </div>
  );
};
