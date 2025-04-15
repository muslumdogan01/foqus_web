import Image from 'next/image'
import React from 'react'

const GetStart = () => {
  return (
    <div className='w-full mt-[100px] md:mt-[200px] h-full flex justify-center items-center bg-[#F8ECD6] space-x-[40px] py-24'>
        <h1 className='cursor-pointer md:text-[80px] text-[40px] md:leading-[96px] leading-[1.2] tracking-[-0.02em] text-center font-medium text-[#202428]'>Kullanmaya <br className='block md:hidden' /> Başla</h1>
            <Image src="/content/getStart.svg" width={70} height={70} alt="circle" className='hidden md:block' />
    </div>
  )
}

export default GetStart