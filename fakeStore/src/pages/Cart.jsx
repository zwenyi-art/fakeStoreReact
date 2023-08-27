import React, { useEffect, useState } from "react";
import { useStateContext } from "../context/StateContext";

const Cart = () => {
  const {
    state: { cart },
  } = useStateContext();
  const [myCard,setMyCard]=useState(cart);
  const [qty,setQty]=useState(1);
  const [total,setTotal]=useState(0);
  const increaseQty = (item_id) => {
    setMyCard(prev => prev.map((c)=>c.id === item_id ? {...c,qty:c.qty+1}:c));
    // data = myCard.map((c)=>c.id === item_id ? {...c,qty:c.mqty+1}:c);
    // const newData = {...data,qty:(data.qty || 0 )+1}
    console.log("increased");
  };
  const decreaseQty = () => {
    setQty(prev=>prev - 1);
  };
  useEffect(()=>{
    console.log(myCard);
    const totalPrice = myCard.map((item)=>item.qty * item.price);
    setTotal(totalPrice.reduce((acc,curr)=>acc+curr,0))
  },[myCard])
  return (
    <div className="flex flex-row items-start justify-between mt-4">
      <div className="flex flex-col justify-start mt-4 gap-5">
        {myCard?.map((p) => (
          <div key={p.id} className="w-full flex flex-row">
            <img src={p?.image} className="w-20 h-28" alt="" />
            <div className="pl-7 flex flex-col gap-1">
              <p>{p?.title}</p>
              <p>{p?.price * p.qty}$</p>
              <p>{p?.qty}</p>
              <div className="flex flex-row">
                <button
                  onClick={() => {
                    dispatch({ type: "removeFromCart", payload: p });
                  }}
                  className="w-fit px-2 py-1 rounded text-xs bg-btnbgColor text-btntextColor"
                >
                  Delete
                </button>
                <button
                  onClick={()=>increaseQty(p.id)}
                  className="w-fit px-2 py-1 mx-3 rounded text-xs bg-btnbgColor text-btntextColor"
                >
                  +
                </button>

                <span className="w-fit px-2 py-1 rounded text-xs bg-cardbgColor">
                  {qty}
                 {/* {totalPrice(p)} */}
                </span>

                <button
                  disabled={qty > 1 ? false:true}
                  // onClick={() => {subItem(p?.price)}}
                  onClick={decreaseQty}
                  className="w-fit px-2 py-1 mx-3 rounded text-xs bg-btnbgColor text-btntextColor"
                >
                  -
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-3 items-center justify-center bg-cardbgColor  h-fit px-11 w-fit py-4">
        <p>Total Price {total}$</p>
        <button className="bg-btnbgColor text-bgColor rounded text-sm w-fit px-7">
          CHECK OUT
        </button>
      </div>
    </div>
  );
};

export default Cart;
