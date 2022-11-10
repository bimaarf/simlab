import React from "react";
import { Sidebar } from "../Components/Sidebar";
export const Home = () => {
  return (
    <>
      <div className="flex columns-2">
        <Sidebar />
        <div className="w-full">
          <div className="flex columns-2 m-10 ">
            <div className="w-2/3 bg-white rounded-lg p-5">
              <div className="flex columns-2 justify-between border-b pb-10">
                <div className="w-1/2">
                  <h1 className="text-gray-500 font-semibold">
                    Total aset yang telah dipinjam
                  </h1>
                  <h1 className="text-4xl font-bold text-orange-400 mt-5">
                    80 Aset
                  </h1>
                </div>
                <div className="w-1/2">
                  <h1 className="text-gray-500 font-semibold">
                    Aset yang masih dipinjam
                  </h1>
                  <h1 className="text-4xl font-bold text-blue-900 mt-5">
                    12 Aset
                  </h1>
                </div>
              </div>
              <div className="flex columns-2 justify-between pb-6 pt-10">
                <div className="w-1/2">
                  <h1 className="text-gray-500 font-semibold">
                    Aset pinjam yang belum divalidasi
                  </h1>
                  <h1 className="text-4xl font-bold text-green-400 mt-5">
                    1 Aset
                  </h1>
                </div>
                <div className="w-1/2">
                  <h1 className="text-gray-500 font-semibold">
                    Aset pengembalian yang telah divalidasi
                  </h1>
                  <h1 className="text-4xl font-bold text-cyan-500 mt-5">
                    4 Aset
                  </h1>
                </div>
              </div>
            </div>
            {/* <div className="w-1/3 h-20 bg-green-50"></div> */}
          </div>
        </div>
      </div>
    </>
  );
};
