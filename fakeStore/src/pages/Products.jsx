import React, { useContext, useEffect, useState } from "react";
import { useStateContext } from "../context/StateContext";
import Card from "../components/Card";

const Products = () => {
  const {
    state: { productList,cart },
  } = useStateContext();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    setProducts(productList);
  }, [productList]);
  console.log(cart);
  return (
    <div className="flex flex-wrap gap-5  my-2">
      {products?.map((p) => (
        <Card key={p.id} product={p}></Card>
      ))}
    </div>
  );
};

export default Products;
