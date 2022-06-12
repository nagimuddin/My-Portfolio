import React from "react";
import { Link } from "react-router-dom";
import Button from "../Shared/Button";

const Projects = () => {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <h1 className="text-4xl text-center my-6 font-bold text-blue-600/100">
            My Projects
          </h1>
          <div className="flex flex-wrap -m-4">
            <div className="p-4 md:w-1/3 text-center">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                  src="https://buthydro.sirv.com/Tools%20images/screenshot-tools-manufacturer.png"
                  alt="blog"
                />
                <div className="p-6">
                  <h1 className="title-font text-4xl font-medium text-gray-900 mb-3">
                    TOOLS-MANUFACTURER
                  </h1>
                  <h2 className="tracking-widest text-2xl title-font font-medium text-gray-400 mb-1">
                    FULL STACK PROJECT
                  </h2>
                  <ul className="text-lg flex justify-center gap-1">
                    <li>Code Link:</li>
                    <li>
                      <Link to='' className="text-indigo-500">Client Site|</Link>
                    </li>
                    <li>
                      <Link to="" className="text-indigo-500">Server Site|</Link>
                    </li>
                    <li>
                      <Link to="" className="text-indigo-500">Live Site</Link>
                    </li>
                  </ul>
                  <Button></Button>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3 text-center">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                  src="https://buthydro.sirv.com/Tools%20images/automobile-distribute-agent.png"
                  alt="blog"
                />
                <div className="p-6">
                  <h1 className="title-font text-4xl font-medium text-gray-900 mb-3">
                    WAREHOUSE-MANAGEMENT
                  </h1>
                  <h2 className="tracking-widest text-2xl title-font font-medium text-gray-400 mb-1">
                    FULL STACK PROJECT
                  </h2>
                  <ul className="text-lg flex justify-center gap-1">
                    <li>Code Link:</li>
                    <li>
                      <Link to="" className="text-indigo-500">Client Site|</Link>
                    </li>
                    <li>
                      <Link to="" className="text-indigo-500">Server Site|</Link>
                    </li>
                    <li>
                      <Link to="" className="text-indigo-500">Live Site</Link>
                    </li>
                  </ul>
                  <Button></Button>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3 text-center">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                  src="https://buthydro.sirv.com/Tools%20images/wedding-photographer.png"
                  alt="blog"
                />
                <div className="p-6">
                  <h1 className="title-font text-4xl font-medium text-gray-900 mb-3">
                    WEDDING-PHOTOGRAPHER
                  </h1>
                  <h2 className="tracking-widest text-2xl title-font font-medium text-gray-400 mb-1">
                    FRONT END PROJECT
                  </h2>
                  <ul className="text-lg flex justify-center gap-1">
                    <li>Code Link:</li>
                    <li>
                      <Link to="" className="text-indigo-500">GitHub Link|</Link>
                    </li>
                    <li>
                      <Link to="" className="text-indigo-500">Live Site</Link>
                    </li>
                  </ul>
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
