import React from 'react'

function Accessories() {
  return (
    <div className='Accessories'>
        <div className='flex items-center justify-center pt-[190px] lg:pt-11 xl:pt-[90px]  flex-col'>
        <div className=''>
               <h1 className='text-[42px] font-semibold tracking-wider'>Accessories</h1>
            </div>
            <div className='mt-[590px] lg:mt-[390px] xl:mt-[330px]  h-10 bg-[#171A20] w-[290px] pl-[109px] pt-[6px] rounded-full '>
              <button className='text-[#FFFFFF] text-[16px] font-semibold'>
                Shop Now
              </button>
            </div>
           <footer className=' mt-24 lg:mt-8 xl:mt-24'>
                 <ul className='flex space-x-4 text-[#5C5E62] text-[15px]'>
                   <li>Tesla © 2022</li>
                   <li>Privacy & Legal</li>
                   <li>Vehicle Recalls</li>
                   <li>
Contact
</li>
                   <li>Carriers</li>
                   <li>News</li>
                   <li>Engage</li>
                   <li>Location</li>
                 </ul>
           </footer>
        </div>
    </div>
  )
}

export default Accessories