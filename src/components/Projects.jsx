import React from "react";
function Projects() {
  return (
    <div
      name="projects"
      className="bg-[#2f3235] text-gray-300 w-full h-screen"
    >
      <div className="max-w-[1000px] max-h-[1000px] mx-auto px-8 flex flex-col justify-center h-full ">
        <div className="card pb-20">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-[#2f3235] border-[#2f3235] py-3">
            Projects
          </p>
          <p className="text-2xl font-bold py-10 w-[50%] text-[#2f3235]">
            Here are some projects I have completed
             or working on currently!
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 ">
        <div className=" bg-blue-500 shadow-sm shadow-[#040c16] group container rounded-md flex text-center justify-center items-center mx-auto">
            <div className="pt-3">
              <p className='text-2xl font-bold text-white px-10' >
                Event Share  (Group Project)
              </p>
              
              <div className="pt-8 text-center">
                <a href="https://event-share123-cc0d9b418402.herokuapp.com/">
                  <button className=" hover:transition opacity-0 group-hover:opacity-100 hover:smooth text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/juanx198522/Event-Share">
                  <button className=" opacity-0 group-hover:opacity-100 hover:s text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className=" bg-blue-500 shadow-sm shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto">
            <div>
              <span >
                ReadMe Generator
              </span>
              <div className="pt-8 text-center">
                <a href="https://github.com/Jdelg140/Pro-Readme_creator/tree/main/utils#readme">
                  <button className=" opacity-0 group-hover:opacity-100 text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/Jdelg140/Pro-Readme_creator">
                  <button className=" opacity-0 group-hover:opacity-100 text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className=" bg-blue-500 shadow-sm shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto">
            <div>
              <span >
                E-Commerce API's
              </span>
              <div className="pt-8 text-center">
                <a href="https://drive.google.com/file/d/1oilxT4hbd_hlz_PmTZr866kduCXeD8Ew/view">
                  <button className=" opacity-0 group-hover:opacity-100 text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/Jdelg140/E-Commerce-Backend">
                  <button className=" opacity-0 group-hover:opacity-100 text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className=" bg-blue-500 shadow-sm shadow-[#040c16] group container rounded-md flex justify-center text-center items-center mx-auto">
            <div className="pt-3">
              <span >
                Live Standings App (Group Project)
              </span>
              <div className="pt-8 text-center">
                <a href="https://juanx198522.github.io/Sport-Standings-Tracker/#">
                  <button className=" opacity-0 group-hover:opacity-100  text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/juanx198522/Sport-Standings-Tracker">
                  <button className=" opacity-0 group-hover:opacity-100 text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className=" bg-blue-500 shadow-sm shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto">
            <div>
              <span >
                Logo Builder
              </span>
              <div className="pt-8 text-center">
                <a href="https://drive.google.com/file/d/1QOTsqJWIxjINlQpTiiB3HfCOK5mXB9HJ/view">
                  <button className=" opacity-0 group-hover:opacity-100 text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/Jdelg140/Logo-Builder">
                  <button className=" opacity-0 group-hover:opacity-100 text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          
          <div className=" bg-blue-500 shadow-sm shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto">
            <div>
              <span>
                PWA Text Editor
              </span>
              <div className="pt-8 text-center">
                <a href="https://jate-editor-19-0260c1590efc.herokuapp.com/">
                  <button className=" opacity-0 group-hover:opacity-100 text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/Jdelg140/text-editor-PWA">
                  <button className=" opacity-0 group-hover:opacity-100 text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
        </div>
        

      </div>
    </div>
  );
}

export default Projects;
