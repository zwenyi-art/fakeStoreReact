import { useStateContext } from "../context/StateContext"


const Button = ({children,handleBtn,text}) => {
  // const {sayHello}=useStateContext();
  // const handleButton = (fn,text)=>{
  //    return handleAdd(text);
  // }
  const handleButton = ()=>{
    handleBtn(text)
  }
  return (
   <button onClick={handleButton} className="rounded-md bg-btnbgColor text-btntextColor inline-flex items-center justify-center px-4 w-fit py-1">
      {children}
   </button>
  )
}

export default Button