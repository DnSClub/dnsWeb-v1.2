import React from 'react';
const Hero = () => {
  return (
    <header className='relative text-white flex items-start justify-start gap-8 w-[90%] md:w-2/3 mx-auto my-8'>
        <section className='flex flex-col items-start gap-8'>
            <div className=''>
                <h1 className='absolute -left-12 -top-12 text-7xl'>&#10100;</h1>
                <h1 className='text-7xl'>dns</h1>
            </div>
            <h2 className='text-4xl'>developers and systems</h2>
            <h3 className='text-3xl'>created by first years, made for all</h3>
        </section>
        <img src='/images/donut.gif' alt='donut' />
    </header>
  )
}

export default Hero;