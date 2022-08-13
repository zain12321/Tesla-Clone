import React from 'react'
import Header from '../components/Header'
import { BiMessageDots } from 'react-icons/bi'
// import logo from '../public/linnkedin.png'
// import Image from 'next/image'
function ModelS() {
  return (
    <div className='ModelSPlaid'>
     <div>
     <Header/>
     </div>
     
     <div>
                  
     </div>
<div className='flex flex-col items-center justify-center pt-[90px]'> 
  <div>
      <h1 className='text-[42px] text-[#171A20] font-semibold tracking-wide'>Model S</h1>
      <p className='text-[20px] pl-12 text-[#171A20]'>Plaid</p>
  </div>
  <div className='flex mt-80 items-center'>
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
     {/* <div className=''>
   <Image
   src={logo}
   alt=''
   />
     </div> */}
    </div>
  )
}

export default ModelS