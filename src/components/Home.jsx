import React from "react";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#2f3235] ">
      <div className=" max-w-[1000px] max-h-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <div className="card">
        <div>
          <p className="text-4xl font-bold text-[#2f3235] py-2">
            Hi, my name is
          </p>
        </div>
        <div className="text-blue-500 text-6xl font-bold py-7 lg:w-[40%] ">
        <h1 class="animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-black py-4 pr-5 text-5xl text-blue-500 font-bold">Jacob Delgado</h1>
        </div>
        <div className="text-4xl font-bold text-[#2f3235] py-2">
          <p>I am a full stack developer.</p>
        </div>
        </div>
        
      </div>
    </div>
  );
};

export default Home;
