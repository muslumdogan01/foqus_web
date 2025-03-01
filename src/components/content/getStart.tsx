import Image from 'next/image'
import React from 'react'

const GetStart = () => {
  return (
    <div className='w-full mt-[300px] h-full flex justify-center items-center bg-[#F8ECD6] space-x-[40px] py-24'>
        <h1 className='text-[80px] leading-[96px] tracking-[-0.02em] font-medium text-[#202428]'>Get Started</h1>
            <Image src="/content/getStart.svg" width={70} height={70} alt="circle" />
    </div>
  )
}

export default GetStart