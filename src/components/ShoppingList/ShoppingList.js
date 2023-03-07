import React, { useState } from "react";
import Product from "../Product/Product";
import productList from "../productlist";

const ShoppingList = (props) => {
  return (
    <div>
      {props.product.map((productvalue, index) => {
        return (
          <Product
            key={index}
            name={productvalue.name}
            img={productvalue.img}
            detail={productvalue.detail}
          />
        );
      })}
    </div>
  );
};

export default ShoppingList;

// <Product
//   name="Table Lamp "
//   img="https://images.unsplash.com/photo-1661956602926-db6b25f75947?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
//   detail="It's a great table lamp"
// >
//   Hey this is the children data
// </Product>
