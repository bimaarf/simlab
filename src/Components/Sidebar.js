import React from "react";
export const Sidebar = () => {
  function dropdown() {
    document.querySelector("#submenu").classList.toggle("hidden");
    document.querySelector("#arrow").classList.toggle("rotate-1");
  }

  function openSidebar() {
    document.querySelector(".sidebar").classList.toggle("hidden");
  }
  return (
    <>
      <div className="h-screen bg-white w-96">
        <div className="py-4 px-4 mx-4 border-t uppercase">
          <span className="text-gray-400 text-sm">Dashboard</span>
        </div>
        <div className="py-4 px-4 mx-4 flex items-center duration-300 cursor-pointer text-gray-600">
          <i className="bi bi-chat-left-text-fill"></i>
          <div className="flex justify-start w-full items-center text-3xl">
            <i className="fa fa-home"></i>
            <span className="text-lg ml-4 font-semibold ">Home</span>
          </div>
        </div>
        <div className="py-4 px-4 mx-4 border-t ">
          <span className="text-gray-400 text-sm uppercase">
            Lab & Ketersediaan Aset
          </span>
        </div>
        <div
          className="py-4 px-4 mx-4 flex items-center duration-300 cursor-pointer border-b text-cyan-500 "
          onClick={dropdown}
        >
          <i className="bi bi-chat-left-text-fill"></i>
          <div className="flex justify-start w-full items-center text-3xl">
            <i className="fa fa-flask"></i>
            <span className="text-lg ml-4 font-semibold">Lab</span>
          </div>
          <span className="text-sm rotate-180" id="arrow">
            <i className="fa fa-arrow-up"></i>
          </span>
        </div>
        <div
          className="text-left text-sm mt-2 w-4/5 mx-auto font-semibold"
          id="submenu"
        >
          <h1 className="cursor-pointer p-2 bg-gray-200 text-gray-600 rounded-md mt-1">
            Lab Matematika
          </h1>
          <h1 className="cursor-pointer p-2 hover:bg-gray-200 text-gray-600 rounded-md mt-1">
            Lab Fisika Dasar
          </h1>
          <h1 className="cursor-pointer p-2 hover:bg-gray-200 text-gray-600 rounded-md mt-1">
            Lab Fisika Lanjut dan Komp
          </h1>
          <h1 className="cursor-pointer p-2 hover:bg-gray-200 text-gray-600 rounded-md mt-1">
            Lab Kimia
          </h1>
          <h1 className="cursor-pointer p-2 hover:bg-gray-200 text-gray-600 rounded-md mt-1">
            Lab Bioteknologi dan Riset
          </h1>
          <h1 className="cursor-pointer p-2 hover:bg-gray-200 text-gray-600 rounded-md mt-1">
            Lab Biologi
          </h1>
          <h1 className="cursor-pointer p-2 hover:bg-gray-200 text-gray-600 rounded-md mt-1">
            Lab Zoologi
          </h1>
          <h1 className="cursor-pointer p-2 hover:bg-gray-200 text-gray-600 rounded-md mt-1">
            Lab Pemrograman dan Komp
          </h1>
          <h1 className="cursor-pointer p-2 hover:bg-gray-200 text-gray-600 rounded-md mt-1">
            Lab Statistika
          </h1>
          <h1 className="cursor-pointer p-2 hover:bg-gray-200 text-gray-600 rounded-md mt-1">
            Lab Ilmu Kelautan
          </h1>
          <h1 className="cursor-pointer p-2 hover:bg-gray-200 text-gray-600 rounded-md mt-1">
            Lab Sistem Informasi
          </h1>
          <h1 className="cursor-pointer p-2 hover:bg-gray-200 text-gray-600 rounded-md mt-1">
            Lab Geofisika dan Sistem Informasi
          </h1>
        </div>
        <div className="py-4 px-4 mx-4 mt-2 border-t uppercase">
          <span className="text-gray-400 text-sm">
            Peminjaman & Laporan Aset
          </span>
        </div>
        <div className="py-4 px-4 mx-4 flex items-center duration-300 cursor-pointer text-gray-600">
          <i className="bi bi-chat-left-text-fill"></i>
          <div className="flex justify-start w-full items-center text-3xl">
            <i className="fa fa-calendar"></i>
            <span className="text-lg ml-4 font-semibold ">Peminjaman Aset</span>
          </div>
        </div>
        <div className="py-4 px-4 mx-4 flex items-center duration-300 cursor-pointer border-b text-gray-600">
          <i className="bi bi-chat-left-text-fill"></i>
          <div className="flex justify-start w-full items-center text-3xl">
            <i className="fa fa-paste"></i>
            <span className="text-lg ml-4 font-semibold ">
              Laporan Peminjaman Aset
            </span>
          </div>
        </div>
        <div className="py-4 px-4 mx-4 flex items-center duration-300 cursor-pointer border-b text-gray-600">
          <i className="bi bi-chat-left-text-fill"></i>
          <div className="flex justify-start w-full items-center text-3xl">
            <i className="fa fa-file"></i>
            <span className="text-lg ml-4 font-semibold ">Surat Bebas Lab</span>
          </div>
        </div>
      </div>
    </>
  );
};
