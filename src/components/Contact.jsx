import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-[#2f3235] flex justify-center items-center p-4"
    >
      <form
        method="POST"
        action="https://getform.io/f/7d9b0893-22c9-4407-b624-c764eda42aa8"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-blue-500 text-gray-300 py-3">
            Contact
          </p>
          <p className="text-gray-300 py-4"></p>
          <p className="text-gray-300 py-4 font-bold">Let's connect!</p>
        </div>
        <input
          className="bg-[#ccd6f6] p-2"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className="my-4 p-2 bg-[#ccd6f6]"
          type="email"
          placeholder="Email"
          name="email"
        />
        <textarea
          className="bg-[#ccd6f6] p-2"
          name="message"
          rows="10"
          placeholder="Message"
        ></textarea>
        <button className="bg-gray-300 text-blue-500 border-2 hover:bg-blue-500 hover:text-gray-300 px-8 py-3 my-8 mx-auto flex items-center font-bold">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
