import { createContext, useContext, useEffect, useReducer, useState } from "react";
import { getData } from "../Api";

const StateContext = createContext();

export const StateContextProvider = ({children})=>{
  const initialState = {
    productList:[],
    cart:[],
  }
 
  
  const taskReducer = (product,action)=>{
    switch(action.type){
      case 'addProducts':{
          return {...product,productList:action.payload};
      }
      case 'addToCart':{
          const item = action.payload;
          const isExisted= product.cart.find(c =>c.id === item.id);
          if(isExisted){
            return {
              ...product,cart:product.cart.map(c=>c.id === item.id ? {...item,qty:1} : {...c,qty:1})
            }
          }else{
            return {
              ...product,cart:[...product.cart,{...item,qty:1}]
            }
          }
          // return {...product,cart:[...product.cart,{...action.payload,qty:1}]}
      }
      case 'removeFromCart':{
          return {...product,cart:product.cart.filter(item=>item.id != action.payload.id)}
      }
      case 'emptyCard':{
        return {...product,cart:[]}
      }
      case 'itemAdd':{
          const item = action.payload
          const data = product.cart.find(c => c.id === item.id? {...item} : {...c})
          return {...product,cart:data}
      }
      default:
        return product;
    }
  }
  //initiate hooks
  const [state,dispatch]=useReducer(taskReducer,initialState);
  const [search,setSearch]=useState('');
  const [productList,setProductList]=useState([]);
  useEffect(()=>{
    const getProducts =async ()=>{
      const data = await getData('/products');
      setProductList(data);
    }
    getProducts();
  },[])
  useEffect(()=>{
     dispatch({type:'addProducts',payload:productList});
     const filterData = productList.filter(pd=>pd.title.toLowerCase() == search.toLowerCase());
     console.log(filterData);
     if(search != ''){
       dispatch({type:'addProducts',payload:filterData});
     }
  },[search,productList])

  const data = {state,search,setSearch,dispatch};
  return (
    <StateContext.Provider value={data}>
        {children}
    </StateContext.Provider>
  )
}
export const useStateContext = ()=> useContext(StateContext);
