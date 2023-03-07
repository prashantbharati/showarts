import React, { useState } from "react";
import ShoppingList from "./ShoppingList/ShoppingList";
import Form from "./Form/Form";
const Productlist = () => {
  const dummy_products = [
    {
      name: "Table Lamp ",
      img: "https://images.unsplash.com/photo-1661956602926-db6b25f75947?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
      detail: "It's a great table lamp",
      count: 0,
    },
    {
      name: "Memories",
      img: "https://images.unsplash.com/photo-1677658992057-d90f001e02f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
      detail: "It's a great table lamp",
      count: 0,
    },
    {
      name: "Table Lamp ",
      // img: "https://images.unsplash.com/photo-1677665248618-0425412a4cd9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
      img: "https://images.unsplash.com/photo-1677665248618-0425412a4cd9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
      detail: "It's a great table lamp",
      count: 0,
    },
  ];
  const [product, setProduct] = useState(dummy_products);

  return (
    <div>
      <Form product={product} setProduct={setProduct} />
      <ShoppingList product={product} setProduct={setProduct} />
    </div>
  );
};

export default Productlist;

// export default productList;
