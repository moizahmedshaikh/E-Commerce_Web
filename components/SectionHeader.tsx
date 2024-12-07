import React from 'react'

const SectionHeader = ({heading, subHeading,}:{heading:string, subHeading:string}) => {
  return (
    <div>
        <div className='flex items-center gap-3 mb-4'>
            <div className='w-5 h-10 bg-boxprimary rounded'/>
            <h3 className='text-boxprimary text-[12px] md:text-[15px] font-semibold'>{subHeading}</h3>
        </div>
        <h1 className='font-style md:text-4xl text-[24px] font-semibold'>
            {heading}
        </h1>
    </div>
  )
}

export default SectionHeader