import React from "react";

const Skills = () => {
  return (
    <>
      <div class="hero min-h-screen bg-base-200">
        <div class="hero-content">
          <div class="text-center lg:text-left">
            <h2 class="py-3 text-4xl font-bold">My Skills</h2>
            <h2 class="text-2xl font-bold">
              Every day <br />I develop my skills
            </h2>
            <p className="text-xl">
              I am a active learner.I always try to learn new in every day. My
              goal is want to be a full stack developer. Till now I gethard some
              experience these are.
            </p>
          </div>
          <div class="w-full grid grid-cols-3 gap-3 bg-slate-100 p-8 mx-auto">
            <div class="form-control mt-6">
              <button class="btn btn-outline">Html</button>
            </div>
            <div class="form-control mt-6">
              <button class="btn btn-outline">Css3</button>
            </div>
            <div class="form-control mt-6">
              <button class="btn btn-outline">JavaScript</button>
            </div>
            <div class="form-control mt-6">
              <button class="btn btn-outline">Bootstrape</button>
            </div>
            <div class="form-control mt-6">
              <button class="btn btn-outline">react.js</button>
            </div>
            <div class="form-control mt-6">
              <button class="btn btn-outline">Tailwind</button>
            </div>
            <div class="form-control mt-6">
              <button class="btn btn-outline">Node.js</button>
            </div>
            <div class="form-control mt-6">
              <button class="btn btn-outline">Firebase</button>
            </div>
            <div class="form-control mt-6">
              <button class="btn btn-outline">Mongodb</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
