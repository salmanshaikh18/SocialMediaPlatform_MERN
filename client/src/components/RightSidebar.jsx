import React from "react";
import Avatar from "react-avatar";
import { CiSearch } from "react-icons/ci";

const RightSidebar = () => {
  return (
    <div className="p-4 border-l-[1px] border-zinc-700 flex flex-col gap-4 w-full sm:w-[30%]">
      <div className="w-full flex justify-center items-center">
        <CiSearch className="text-zinc-200 font-bold p-2  text-sm w-10 bg-slate-600 h-10 rounded-l-[20px]" />
        <input
          placeholder="Search"
          type="text"
          className="px-2 bg-slate-600 w-[90%] py-2 rounded-r-[20px] border-none outline-none text-white"
        />
      </div>
      <div className="w-full bg-slate-700 p-4 rounded-xl flex flex-col justify-center items-start gap-1">
        <h1>Subscribe To Premium</h1>
        <p className="text-sm">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia,
          quasi.
        </p>
        <button className="px-4 py-2 mt-2 bg-slate-500 hover:bg-slate-600 transition-all ease-in duration-300 text-white rounded-2xl text-sm">
          Subscribe
        </button>
      </div>
      <div className="w-full bg-slate-700 p-4 rounded-xl flex flex-col justify-center items-start gap-3">
        <h1 className="font-bold text-lg mb-4">Who To Follow</h1>
        <div className="flex justify-between items-center w-full">
          <div className="flex justify-center items-center gap-2">
            <div className="h-10 w-10 bg-red-500 rounded-full">
              <Avatar googleId="118096717852922241760" size="40" round={true} />
            </div>
            <div>
              <h1>salman</h1>
              <p>salman@gmail.com</p>
            </div>
          </div>
          <button className="px-4 relative py-2 mt-2 bg-slate-500 hover:bg-slate-600 transition-all ease-in duration-300 text-white rounded-2xl text-sm">
            Follow
          </button>
        </div>

        <div className="flex justify-between items-center w-full">
          <div className="flex justify-center items-center gap-2">
            <div className="h-10 w-10 bg-red-500 rounded-full">
              {/* <Avatar name="Wim Mostmans" size={40} round={true} /> */}
              <Avatar facebookId="100008343750912" size="40" round={true} />
            </div>
            <div>
              <h1>salman</h1>
              <p>salman@gmail.com</p>
            </div>
          </div>
          <button className="px-4 relative py-2 mt-2 bg-slate-500 hover:bg-slate-600 transition-all ease-in duration-300 text-white rounded-2xl text-sm">
            Follow
          </button>
        </div>

        <div className="flex justify-between items-center w-full">
          <div className="flex justify-center items-center gap-2">
            <div className="h-10 w-10 bg-red-500 rounded-full">
              <Avatar githubHandle="sitebase" size={40} round="20px" />
            </div>
            <div>
              <h1>salman</h1>
              <p>salman@gmail.com</p>
            </div>
          </div>
          <button className="px-4 relative py-2 mt-2 bg-slate-500 hover:bg-slate-600 transition-all ease-in duration-300 text-white rounded-2xl text-sm">
            Follow
          </button>
        </div>
      </div>
    </div>
  );
};

export default RightSidebar;
