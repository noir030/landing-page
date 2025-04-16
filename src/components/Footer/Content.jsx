import React from 'react'

export default function Content() {
  return (
    <div className='bg-[#202020] text-white py-8 px-12 h-full w-full flex flex-col justify-between'>
        <Section1 />
        <Section2 />
    </div>
  )
}

const Section1 = () => {
    return (
        <div>
            <Nav />
        </div>
    )
}

const Section2 = () => {
    return (
        <div className='flex justify-between items-end'>
            <h1 className='text-[14vw] leading-[0.8] mt-10'>Flex Sharing</h1>
            <p>©copyright</p>
        </div>
    )
}

const Nav = () => {
    return (
        <div className='flex shrink-0 gap-20'>
            <div className='flex flex-col gap-2'>
                <h2 className='mb-2 uppercase font-extrabold text-[#ffffff80]'>About</h2>
                <p className='font-semibold'>Home</p>
                <p className='font-semibold'>Projects</p>
                <p className='font-semibold'>Our Mission</p>
                <p className='font-semibold'>Contact Us</p>
            </div>
            <div className='flex flex-col gap-2'>
                <h3 className='mb-2 uppercase font-extrabold text-[#ffffff80]'>Education</h3>
                <p className='font-semibold'>News</p>
                <p className='font-semibold'>Learn</p>
                <p className='font-semibold'>Certification</p>
                <p className='font-semibold'>Publications</p>
            </div>
        </div>
    )
}