import React from "react";

const AboutMe = () => {
  return (
    <>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url(https://buthydro.sirv.com/Tools%20images/about-me.jpg)`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center">
          <div className="max-w-4xl">
            <h1 className="mb-5 text-5xl font-bold text-black">About Me</h1>
            <p className="mb-5 text-xl text-white">
              I am a beginner in web development sector. I completed my
              bachelor degree in management. But, I decide that I must build my
              career be a web developer.Recently I finished a complete web
              development course and gathered some experience and over the
              course I have built up a diverse range of skills, qualities and
              attributes that guarantee I will perform highly as a developer. I
              can work both alone and as part of a team on often time-sensitive,
              challenging web development projects that require outstanding
              creative and technical capabilities and the ability to ensure all
              work is optimized across a wide range of platforms. Also, I can
              perform some technology such as html, CSS, JavaScript, react.js,
              express.js, firebase, mongo dB, JWT etc. For this reason, I think
              you can hire me.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
