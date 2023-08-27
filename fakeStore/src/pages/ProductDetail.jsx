import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getData } from "../Api";
import { useStateContext } from "../context/StateContext";
const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [products, setProducts] = useState([]);
  const {dispatch}=useStateContext();
  const getProductDetail = async () => {
    setProduct(await getData(`/products/${id}`));
  };
  const getProductCate = async () => {
    const data = await getData(`/products/category/${product.category}`);
    const filtered = data?.filter((item)=>item.id != product.id);
    setProducts(filtered);
  };
  useEffect(() => {
    getProductDetail();
  }, [id]);
  useEffect(() => {
    getProductCate();
    console.log(products);
  }, [product]);

  return (
    <div>
      <div className="flex flex-col mt-5 items-center justify-center  w-full bg-white rounded-md shadow-md ">
        <img src={product?.image} className="h-[100px] mx-auto my-3" alt="" />
        <h3 className="font-extrabold text-center">{product?.title}</h3>
        <p className="font-bold">{product?.price}$</p>
        <p className=" text-center">{product?.description}$</p>
        <div className="flex flex-row gap-12 py-4">
          <button onClick={()=>dispatch({type:"addToCart",payload:product})} className="bg-btnbgColor w-fit px-2 py-1 rounded text-xs text-btntextColor transform transition duration-100 hover:scale-90">
            Add to Cart
          </button>
          <Link to={`/success`}>
            <button className="bg-green-400 w-fit px-2 py-1 rounded text-sm text-black transform transition duration-100 hover:scale-90">
              Buy Now
            </button>
          </Link>
        </div>
      </div>
      <div className="flex flex-col w-full items-start mt-4">
        <h1 className="font-bold">You May Also Like</h1>
        <div className="flex flex-row items-center my-3 gap-3">
          {products.map((p) => (
            <Link key={p.id} to={`/detail/${p.id}`}>
              <div className="w-fit flex-col items-center justify-center ">
                <img src={p?.image} className="w-24 h-28" alt="" />
                <p className="text-center py-3">{p?.price}$</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
