import React from "react";
import Javascript from "../assets/javascript.png";
import Mongo from "../assets/mongo.png";
import Node from "../assets/node.png";
import Reactimg from "../assets/react.png";
import Github from "../assets/github.png";
import Tailwind from "../assets/tailwind.png";
const Home = () => {
  return (
    <div
      
      className="w-full h-screen bg-gradient-to-r to-cyan-500 from-blue-500 "
    >
      <div className=" max-w-[1000px] max-h-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <div className="card px-0 pb-0 ">
          <div className="px-6">
            <div>
              <p className="text-4xl font-bold text-[#2f3235] py-2">
                Hi, my name is
              </p>
            </div>
            <div className="text-blue-500 text-6xl font-bold py-7 lg:w-[40%] ">
              <h1 class="animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-black py-4 pr-5 text-5xl text-blue-500 font-bold">
                Jacob Delgado
              </h1>
            </div>
            <div className="text-4xl font-bold text-[#2f3235] py-2">
              <p>I am a Full-Stack developer.</p>
            </div>
          </div>

          <div className=" mt-20  p-9  flex flex-row-3 justify-between bg-[#747373] w-full rounded-b">
            <img className="w-20" src={Javascript}></img>
            <img className="w-20" src={Mongo}></img>
            <img className="w-20" src={Node}></img>
            <img className="w-20" src={Reactimg}></img>
            <img className="w-20" src={Github}></img>
            <img className="w-20" src={Tailwind}></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
