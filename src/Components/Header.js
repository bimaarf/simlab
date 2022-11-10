import React from "react";
export const Header = () => {
  return (
    <>
      <div className="navbar bg-white shadow-sm md:px-20 md:py-6">
        <div className="flex-1">
          <a className="btn btn-ghost uppercase text-2xl text-cyan-500 font-bold tracking-widest">
            Sim
            <span className="text-gray-800 font-bold">Lab</span>
          </a>
        </div>
        <div className="flex-none">
          <h1 className="mx-2 font-bold text-sm text-gray-800">Hai, Safari</h1>
          <div className="dropdown dropdown-end">
            <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src="https://placeimg.com/80/80/people" />
              </div>
            </label>
            <ul
              tabIndex="0"
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="text-orange-500">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
