import React from "react";
import { BsGithub } from 'react-icons/bs';
import { FiLinkedin } from 'react-icons/fi';
import { FaFacebookSquare } from 'react-icons/fa';
import { MdOutlineMailOutline } from 'react-icons/md';
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div style={{backgroundImage: `url(https://buthydro.sirv.com/Tools%20images/footer-img1.jpg)`}}
     className="section">
      <div className="container mx-auto h-96 grid items-center py-4">
        <div className="grid grid-cols-4 gap-4 justify-content-center text-white pl-16 text-xl">
          <div className="">
            <h2 className="mb-4">Nagim Uddin</h2>
            <ul className="flex items-center gap-4">
              <li>Follow Me</li>
              <li><a href="https://github.com/nagimuddin"><BsGithub /></a></li>
              <li><a href="https://www.linkedin.com/in/nagim-uddin-948193241/"><FiLinkedin /></a></li>
              <li><a href="https://www.facebook.com/nu.ahmed.313"><FaFacebookSquare /></a></li>
            </ul>
          </div>
          <div className="">
            <h2 className="mb-4">Get In Touch</h2>
            <a href="mailto:nagimuddin520@gmail.com">nagimuddin520@gmail.com</a>
          </div>
          <div className="">
            <h2 className="mb-4">Contact Me</h2>
            <p>+8801673204058</p>
          </div>
          <div className="">
            <h2 className="mb-4">Subscribe</h2>
            <ul className="flex items-center">
              <form>
              <input type="email" className="bg-transparent text-white border-b border-white" placeholder="Email"/>
              </form>
            <li><Link to=""><MdOutlineMailOutline /></Link></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
