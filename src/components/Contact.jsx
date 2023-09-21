import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen font-bold md:h-screen bg-gradient-to-r to-cyan-500 from-blue-500 "
    >
      <div className="max-w-[1000px] max-h-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <form
          method="POST"
          action="https://getform.io/f/7d9b0893-22c9-4407-b624-c764eda42aa8"
          className="flex flex-col mx-auto w-full card my-20"
        >
          <div className="">
            <p className="text-4xl font-bold inline border-b-4  border-[#2f3235] text-[#2f3235] ">
              Contact
            </p>

            <p className="text-[#2f3235] pt-4 font-bold">Let's connect!</p>
          </div>
          <input
            className="bg-[#ccd6f6] p-2 rounded my-2"
            type="text"
            placeholder="Name"
            name="name"
          />
          <input
            className=" p-2 bg-[#ccd6f6] rounded my-2"
            type="email"
            placeholder="Email"
            name="email"
          />
          <textarea
            className="bg-[#ccd6f6] p-2 rounded my-2"
            name="message"
            rows="5"
            placeholder="Message"
          ></textarea>
          <button className="bg-gray-300 text-blue-500 border-2 hover:bg-blue-500 hover:text-gray-300 px-8 py-3 my-8 mx-auto flex items-center font-bold rounded">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
