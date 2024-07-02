import React from "react";

import chef from "../../assets/chef.jpg";

const Card = () => {
  return (
    <div className="flex w-ful mx-auto bg-neutral-900">
      <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4 gap5">
        <div className="group relative  items-center justify-center overflow-hidden cursor-pointer hover:shadow-xl hover:shadow-black/30 transition-shadow">
          <div className="h-full w-full">
            <img
              className="h-full w-full object-cover   group-hover:scale-125 transition-transform duration-300"
              src={chef}
              alt=""
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70">
            <div className="absolute inset-0 flex flex-col items-center justify-center px-9 text-center translate-y-[50%] group-hover:translate-y-0 transition-all">
              <h1 className="text-3xl font-bold text-white">A LA CARTE</h1>
              <p className="text-lg italic text-white mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                CRAB LINGUINE
              </p>
              <button className="rounded-full shadow shadow-black/60 bg-neutral-900 py-2 px-3.5 text-sm capitalize text-white">
                see more
              </button>
            </div>
          </div>
        </div>
        <div className="group relative items-center justify-center overflow-hidden cursor-pointer hover:shadow-xl hover:shadow-black/30 transition-shadow">
          <div className="h-full w-full">
            <img
              className="h-full w-full object-cover   group-hover:scale-125 transition-transform duration-500"
              src={chef}
              alt=""
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70">
            <div className="absolute inset-0 flex flex-col items-center justify-center px-9 text-center translate-y-[50%] group-hover:translate-y-0 transition-all">
              <h1 className="text-3xl font-bold text-white">A LA CARTE</h1>
              <p className="text-lg italic text-white mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                CRAB LINGUINE
              </p>
              <button className="rounded-full shadow shadow-black/60 bg-neutral-900 py-2 px-3.5 text-sm capitalize text-white">
                see more
              </button>
            </div>
          </div>
        </div>
        <div className="group relative items-center justify-center overflow-hidden cursor-pointer hover:shadow-xl hover:shadow-black/30 transition-shadow">
          <div className="h-full w-full">
            <img
              className="h-full w-full object-cover   group-hover:scale-125 transition-transform duration-500"
              src={chef}
              alt=""
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70">
            <div className="absolute inset-0 flex flex-col items-center justify-center px-9 text-center translate-y-[50%] group-hover:translate-y-0 transition-all">
              <h1 className="text-3xl font-bold text-white">A LA CARTE</h1>
              <p className="text-lg italic text-white mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                CRAB LINGUINE
              </p>
              <button className="rounded-full shadow shadow-black/60 bg-neutral-900 py-2 px-3.5 text-sm capitalize text-white">
                see more
              </button>
            </div>
          </div>
        </div>
        <div className="group relative items-center justify-center overflow-hidden cursor-pointer hover:shadow-xl hover:shadow-black/30 transition-shadow">
          <div className="h-full w-full">
            <img
              className="h-full w-full object-cover   group-hover:scale-125 transition-transform duration-500"
              src={chef}
              alt=""
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70">
            <div className="absolute inset-0 flex flex-col items-center justify-center px-9 text-center translate-y-[50%] group-hover:translate-y-0 transition-all">
              <h1 className="text-3xl font-bold text-white">A LA CARTE</h1>
              <p className="text-lg italic text-white mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                CRAB LINGUINE
              </p>
              <button className="rounded-full shadow shadow-black/60 bg-neutral-900 py-2 px-3.5 text-sm capitalize text-white">
                see more
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
