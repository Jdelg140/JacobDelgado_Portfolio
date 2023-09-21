import React from "react";
import Profile from "../assets/Profile.png";

const Aboutme = () => {
  return (
    <div
      name="aboutme"
      className="w-full h-auto font-bold md:h-screen bg-gradient-to-r to-cyan-500 from-blue-500  "
    >
      <div className=" max-w-[1000px] max-h-[1000px] mx-auto px-8 my-auto flex flex-col justify-center h-full ">
        <div className="card">
          <div className="flex justify-between items-baseline">
            <p className=" text-4xl font-bold border-b-4  border-[#2f3235] text-[#2f3235] py-3">
              About Me
            </p>
            <img src={Profile} className="rounded w-[150px] "></img>
          </div>

          <div className="text-[#2f3235] text-lg font-bold pt-10 tracking-wider">
            I'm Jacob Delgado, a motivated and adaptable professional with a
            passion for both business and technology. With a solid foundation in
            International Business from Florida International University, I've
            ventured into the exciting realm of Full Stack Software Development
            at the University of Miami. Equipped with a Bachelor's degree in
            International Business, I've gained valuable insights into the
            global dynamics of commerce and a strong ability to navigate diverse
            cultures and markets. However, my journey has taken an exciting turn
            towards the world of technology, as I'm currently pursuing my
            passion for Full Stack Software Development. My diverse background
            equips me with a unique perspective to understand user needs,
            strategic planning, and effective implementation. I'm enthusiastic
            about learning new technologies and methodologies that will enable
            me to build cutting-edge applications that can shape the future.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutme;
