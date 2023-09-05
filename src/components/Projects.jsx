import React from "react";
import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JS from "../assets/javascript.png";
import REACTIMG from "../assets/react.png";
import MONGO from "../assets/mongo.png";
import NODE from "../assets/node.png";
function Projects() {
  return (
    <div name='projects' className='bg-blue-500 w-full h-screen'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div>
          <p className='text-4xl font-bold inline border-b-4 border-gray-300 text-gray-300 py-2'>Projects</p>
        </div>

        <div className='w-full grid grid-cols-2 gap-4 text-center py-8 mt-4'>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 bg-gray-300'>
            <img className='w-20 mx-auto' src={HTML} alt="HTML icon"></img>
            <p className='my-4  text-black font-bold'>HTML</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 bg-gray-300'>
            <img className='w-20 mx-auto' src={CSS} alt="HTML icon"></img>
            <p className='my-4 text-black font-bold'>CSS</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 bg-gray-300'>
            <img className='w-20 mx-auto' src={JS} alt="HTML icon"></img>
            <p className='my-4 text-black font-bold'>JavaScript</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 bg-gray-300'>
            <img className='w-20 mx-auto' src={REACTIMG} alt="HTML icon"></img>
            <p className='my-4 text-black font-bold'>React</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 bg-gray-300'>
            <img className='w-20 mx-auto' src={MONGO} alt="HTML icon"></img>
            <p className='my-4 text-black font-bold'>MongoBD</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 bg-gray-300'>
            <img className='w-20 mx-auto' src={NODE} alt="HTML icon"></img>
            <p className='my-4 text-black font-bold'>Node.JS</p>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Projects;
