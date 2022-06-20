import React from "react";
import { Link } from "react-router-dom";

const Bennar = () => {
  return ( 
    <>
      <div className="section bg-slate-300">
        <div className="container mx-auto max-w-4xl">
          <div className="card lg:card-side rounded-none">
            <div className="card-body flex self-center text-[#1c3e36]">
              <h2 className="text-2xl">
                Hi, It's <br />{" "}
                <span className="text-4xl text-bold">Nagim Uddin</span> <br />{" "}
                Web developer based in Bangladesh{" "}
              </h2>
              <div className="card-actions my-12 gap-8">
                <Link to="/aboutme" className="btn btn-outline">
                  Say Hi
                </Link>
                <Link to="/projects" className="btn btn-outline">
                  My Work
                </Link>
              </div>
              <p className="text-xl">
                I am listen to your needs and thoughtfully <br /> interpret your
                requirements."
              </p>
            </div>
            <figure className="">
              <img
                src="https://buthydro.sirv.com/Tools%20images/my_photo-1.png"
                alt="Album"
              />
            </figure>
          </div>
        </div>
      </div>
    </>
  );
};

export default Bennar;
