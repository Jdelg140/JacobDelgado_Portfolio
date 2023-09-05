import React from "react";

const Aboutme = () => {
  return (
    <div className="w-full h-screen bg-[#2f3235] ">
     
      <div className=" w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
      <div>
        <p className='text-4xl font-bold inline border-b-4 border-gray-300 text-gray-300 py-2'>About Me</p>
      </div>
        <div className="text-blue-500 text-lg font-bold py-7">
          Hi, I'm <p className="font-bold text-3xl">Jacob Delgado,</p> and I'm a
          software developer currently studying at the University of Miami. My
          passion for coding started when I was in high school, and since then,
          I've been dedicated to expanding my knowledge and skills in this
          field. I'm proficient in languages like JavaScript, Node.js, and
          React, and I'm always eager to learn more about new technologies and
          programming languages. I've also had experience working on various
          projects, both independently and in teams, which has helped me to
          develop my problem-solving and collaboration skills. In addition to my
          technical background, I also have a bachelor's degree in International
          Business from Florida International University. This has given me a
          well-rounded perspective and the ability to approach problems from
          different angles. When I'm not coding, I enjoy exploring new places
          and trying out different foods. I'm also passionate about volunteering
          and giving back to my community. I'm excited to continue growing as a
          software developer and to be a part of the innovative and dynamic tech
          industry. Feel free to explore my portfolio and get in touch if you
          have any questions or would like to collaborate on a project.
        </div>
        <div>
          <button className=" text-blue-500 font-bold bg-gray-300 rounded-full p-[15px] mt-8 hover:bg-blue-500 duration-500 hover:text-gray-300 hover:animate-bounce">
            View Portfolio
          </button>
        </div>
      </div>
    </div>
  );
};

export default Aboutme;
