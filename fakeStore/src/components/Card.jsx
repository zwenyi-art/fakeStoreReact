import React from "react";
import { Link } from "react-router-dom";
import { useStateContext } from "../context/StateContext";

const Card = ({ product }) => {
  const { id, title, image, price } = product;
  const {dispatch}=useStateContext();
  return (
    <div className="flex flex-col items-center  w-60 bg-white rounded-md shadow-md transform transition duration-200 ease-in hover:scale-105">
      <img src={image} className="h-[100px] mx-auto my-3" alt="" />
      <h3>{title.substring(0, 25)}...</h3>
      <p>{price}$</p>
      <div className="flex flex-row gap-12 py-2">
        <button onClick={()=>dispatch({type:"addToCart",payload:product})} className="bg-btnbgColor w-fit px-2 py-1 rounded text-xs text-btntextColor transform transition duration-100 hover:scale-90">
          Add to Cart
        </button>
        <Link to={`/detail/${id}`}>
          <button className="bg-bgColor w-fit px-2 py-1 rounded text-sm text-black transform transition duration-100 hover:scale-90">
            Detail
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Card;
