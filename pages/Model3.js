import React from 'react'
import Header from '../components/Header'
import { BiMessageDots } from 'react-icons/bi'

function Model3() {
  return (
    <div className='Model3Plaid'>
     <div className='text-white'>
     <Header/>
     </div>
    
     <div>
                  
     </div>
<div className='flex flex-col items-center justify-center pt-[76px]'> 
  <div>
      <h1 className='text-[42px]  font-semibold tracking-wide text-[#FFFFFF]'>Model 3</h1>
  </div>
  <div className='flex mt-96 items-center'>
      <div className='flex space-x-[97px]  text-[#FFFFFF]'>
               <div className=''>
                     <h1 className='text-[24px] text-[#FFFFFF] font-bold pl-3'>396 mi</h1>
                     <p className='text-[15px] font-semibold'>Range (EPA est.)</p>
               </div>
               <div className=''>
                     <h1 className='text-[24px] text-[#FFFFFF] font-bold'>1.99
s</h1>
                     <p className='text-[15px] font-semibold'>0-60 mph*</p>
               </div>
               <div className=''>
                     <h1 className='text-[24px] text-[#FFFFFF] font-bold'>200 mph</h1>
                     <p className='text-[15px] font-semibold pl-2'>Top Speed†</p>
               </div>
               <div className=''>
                     <h1 className='text-[24px] text-[#FFFFFF] font-bold'>1,020 hp</h1>
                     <p className='text-[15px] font-semibold pl-2'>Peak Power</p>
               </div>
             
      </div>
      <div className='h-10 hover:text-[#171A20] cursor-pointer pl-[60px] border-[#FFFFFF] text-[#FFFFFF] 
      font-semibold hover:bg-[#FFFFFF] pt-1 w-[210px] rounded-full border-4 ml-8'>
          <button className=' '>Order Now</button>
      </div>
  </div>
</div>
     {/* <div className='fixed bg-[#FFFFFF] pt-[12px] xl:pt-[10px] pl-[12px] 
      xl:pl-[10px] right-10 top-[900px] xl:top-[500px] xl:right-11 
 h-14 w-14    xl:h-11 xl:w-11 rounded-full '>
     <BiMessageDots className='h-8 w-8 xl:h-6 xl:w-6'/>
     </div> */}
    </div>
  )
}

export default Model3