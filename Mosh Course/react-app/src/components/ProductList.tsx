import React, { useEffect, useState } from "react";

const ProductList = () => {
  const [product, setProducts] = useState<string[]>([]);
  useEffect(() => {
    console.log("Fetching products ");
    setProducts(["Clothing", "HouseHold"]);
  });
  return <div></div>;
};

export default ProductList;
