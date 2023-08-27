import React, { useEffect, useReducer, useState } from "react";

const Spread = () => {
  const initialState = {
    count: 0,
    data: [],
  };
  const [zn,setZn]=useState();
  const reducerFun = (state, action) => {
    switch (action.type) {
      case "add": {
        return {
          ...state,
          count: state.count + 1,
          data: [...state.data, state.count + 1],
        };
      }
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducerFun, initialState);
  const addHandler = () => {
    dispatch({ type: "add" });
  };
  useEffect(() => {
    console.log(state);
  }, [state]);
  useEffect(()=>{
    setZn(state.data.reducer((initial,current)=>initial+current,0));
  },[])
  return (
    <div>
      Spread
      <button className="bg-btnbgColor mx-7" onClick={() => addHandler()}>
        add
      </button>
    </div>
  );
};

export default Spread;
