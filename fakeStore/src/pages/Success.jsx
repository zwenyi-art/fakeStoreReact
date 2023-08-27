import React from 'react'

const Success = () => {
  return (
    <div className='flex justify-center mt-20'>
        <div className="bg-cardbgColor p-20 rounded shadow-lg flex flex-col gap-5">
            <h1 className='font-semibold'>
                Thanks for Purchasing   
            </h1>
            <button className='bg-btnbgColor w-fit text-bgColor uppercase rounded py-1 px-1 text-xs'>go shopping</button>
        </div>
    </div>
  )
}

export default Success