import React from "react";

const Aboutme = () => {
  return (
    <div name="aboutme" className="w-full h-full bg-[#2f3235] ">
      <div className=" max-w-[1000px] max-h-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-blue-500 text-gray-300 py-3">
            About Me
          </p>
        </div>
        <div className="text-blue-500 text-lg font-bold py-7">
          I'm Jacob Delgado, a motivated and adaptable professional with a
          passion for both business and technology. With a solid foundation in
          International Business from Florida International University, I've
          ventured into the exciting realm of Full Stack Software Development at
          the University of Miami. Equipped with a Bachelor's degree in
          International Business, I've gained valuable insights into the global
          dynamics of commerce and a strong ability to navigate diverse cultures
          and markets. However, my journey has taken an exciting turn towards
          the world of technology, as I'm currently pursuing my passion for Full
          Stack Software Development.As I continue my education in software
          development, I'm deeply motivated to bridge the gap between business
          and technology. My diverse background equips me with a unique
          perspective to understand user needs, strategic planning, and
          effective implementation. I'm enthusiastic about learning new
          technologies and methodologies that will enable me to build
          cutting-edge applications that can shape the future.
        </div>
      </div>
    </div>
  );
};

export default Aboutme;
