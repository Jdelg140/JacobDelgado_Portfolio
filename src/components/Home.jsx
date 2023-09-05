import React from 'react'

const Home = () => {
  return (
    <div className="w-full h-screen bg-[#2f3235] ">
     
      <div className=" w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
      <div>
        <p className='text-4xl font-bold text-gray-300 py-2'>Hi, my name is</p>
      </div>
        <div className="text-blue-500 text-6xl font-bold py-7">
          <p>Jacob Delgado</p>
        </div>
        <div className='text-4xl font-bold text-gray-300 py-2'>
        <p>I am a full stack developer.</p>
        </div>
      </div>
    </div>
  )
}

export default Home