import React, { useEffect, useState } from "react";
// import classes from "./productdetail.module.css";
import { useParams } from "react-router-dom";
import LayOut from "../../components/LayOut/LayOut";
import axios from "axios";
import { productUrl } from "../../Api/endPoint";
import ProductCard from "../../components/Product/ProductCard";
import Loader from "../../components/Loader/Loader";
function ProductDetail() {
  const { productId } = useParams();
  const [isLoading, setisLoading] = useState(false);
  const [product, setProduct] = useState({});
  useEffect(() => {
    setisLoading(true);
    axios
      .get(`${productUrl}/products/${productId}`)
      .then((res) => {
        setProduct(res.data);
        setisLoading(false);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
        setisLoading(false);
      });
  }, []);
  return (
    <LayOut>
      {isLoading ? (
        <Loader />
      ) : (
        <ProductCard
          product={product}
          flex={true}
          renderDesc={true}
          renderAdd={true}
        />
      )}
    </LayOut>
  );
}

export default ProductDetail;
