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
              <li><Link to="/"><BsGithub /></Link></li>
              <li><Link to="/"><FiLinkedin /></Link></li>
              <li><Link to="/"><FaFacebookSquare /></Link></li>
            </ul>
          </div>
          <div className="">
            <h2 className="mb-4">Get In Touch</h2>
            <p>nagimuddin520@gmail.com</p>
          </div>
          <div className="">
            <h2 className="mb-4">Contact Me</h2>
            <p>+8801673204058</p>
          </div>
          <div className="">
            <h2 className="mb-4">Subscribe</h2>
            <ul className="flex items-center">
              <form>
              <input type="email" class="bg-transparent text-white border-b border-white" placeholder="Email"/>
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
