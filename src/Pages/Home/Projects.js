import React from "react";
import { Link } from "react-router-dom";
import Button from "../Shared/Button";

const Projects = () => {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <h1 className="text-4xl text-center my-6 font-bold text-blue-600/100">My Projects</h1>
          <div className="flex flex-wrap -m-4">
            <div className="p-4 md:w-1/3 text-center">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                  src="https://dummyimage.com/720x400"
                  alt="blog"
                />
                <div className="p-6">
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    TOOLS-MANUFACTURER
                  </h1>
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                    FULL STACK PROJECT
                  </h2>
                  <div className="flex items-center flex-wrap ">
                    <Link
                      to="/"
                      className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"
                    >
                      Code Link: Client Site | Server Site | Live Site
                    </Link>
                  </div>
                  <Button></Button>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3 text-center">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                  src="https://dummyimage.com/721x401"
                  alt="blog"
                />
                <div className="p-6">
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    Warehouse-Management
                  </h1>
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                    FULL STACK PROJECT
                  </h2>
                  <div className="flex items-center flex-wrap">
                    <Link
                      to="/"
                      className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"
                    >
                      Code Link: Client Site | Server Site | Live Site
                    </Link>
                  </div>
                  <Button></Button>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3 text-center">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                  src="https://dummyimage.com/722x402"
                  alt="blog"
                />
                <div className="p-6">
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    WEDDING-PHOTOGRAPHER
                  </h1>
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                    FRONT END PROJECT
                  </h2>
                  <Link
                    to="/"
                    className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"
                  >
                    Code Link: GitHub | Live Site
                  </Link>
                  <Button></Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
