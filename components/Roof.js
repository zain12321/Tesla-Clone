import React from 'react'
import {IoIosArrowDown} from 'react-icons/io'
function Roof() {
  return (
    <div className='Roof'>
            
<div className='flex flex-col items-center justify-center pt-24'>
         <h1 className='text-[40px] text-[#171A20] font-semibold tracking-wide'>Solar Roof</h1>
       <div className='flex  space-x-1'>
       <p className=' text-[#171A20] '>Order Online for</p> <p className='border-b
         border-[#171A20]'>Touchless delievries</p>
       </div>
       </div>
             <div className='xl:flex items-center grid  grid-rows-2 space-x-0 xl:space-x-6 space-y-7 lg:space-y-0 mx-[300px] md:[420px] xl:mx-[400px]
        lg:mt-[320px]      mt-[600px]  xl:mt-[300px] grid-cols-1 lg:grid xl:items-center lg:grid-rows-1 lg:grid-cols-2 '>
                     <div className='bg-[#171A20CC] text-[#FFFFFF] h-11 pt-2 w-64 rounded-full pl-[70px]'>
                                            <button className='text-[14px] font-semibold'>CUSTOM ORDER</button>  
                     </div>
                     <div className='bg-[#F4F4F4F6] text-[#393C41] pt-2 h-11 w-64 rounded-full pl-14'>
                                          <button className='text-[14px] font-semibold'>EXISTING INVENTORY</button>      
                     </div>
             </div>

       {/* <div className=' pl-[10px] rounded-full  ml-[400px] lg:ml-[600px] xl:ml-[660px] mt-[40px]  pt-[6px]'>

         <IoIosArrowDown className='animate-bounce h-6  w-6 text-[#171A20]'/>
       </div> */}
    </div>
  )
}

export default Roof