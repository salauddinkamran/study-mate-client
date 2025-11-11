import React from "react";
import MyContainer from "../MyContainer/MyContainer";
import logoIcon from "../../assets/image/book-2.png";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
      <footer className="py-6 dark:bg-gray-100 dark:text-gray-900">
        <div className="container px-6 mx-auto space-y-6 divide-y dark:divide-gray-600 md:space-y-12 divide-opacity-50">
          <div className="grid grid-cols-12 pb-4">
            <div className="pb-6 col-span-full md:pb-0 md:col-span-6">
              <a
                rel="noopener noreferrer"
                href="#"
                className="flex justify-center space-x-3 md:justify-start"
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-full ">
                  <img src={logoIcon} alt="" />
                </div>
                <span className="self-center text-2xl font-semibold">
                  StudyMate
                </span>
              </a>
            </div>
            <div className="col-span-6 text-center md:text-left md:col-span-3">
              <p className="pb-1 text-lg font-medium">Services</p>
              <ul className="space-y-3">
                <li>
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    className="hover:dark:text-violet-600"
                  >
                    Branding
                  </a>
                </li>
                <li>
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    className="hover:dark:text-violet-600"
                  >
                    Design
                  </a>
                </li>
                <li>
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    className="hover:dark:text-violet-600"
                  >
                    Marketing
                  </a>
                </li>
                <li>
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    className="hover:dark:text-violet-600"
                  >
                    Advertisement
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-span-6 text-center md:text-left md:col-span-3">
              <p className="pb-1 text-lg font-medium">Company</p>
              <ul className="space-y-3">
                <li>
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    className="hover:dark:text-violet-600"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    className="hover:dark:text-violet-600"
                  >
                    Content
                  </a>
                </li>
                <li>
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    className="hover:dark:text-violet-600"
                  >
                    Jobs
                  </a>
                </li>
                <li>
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    className="hover:dark:text-violet-600"
                  >
                    Press kit
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="grid justify-center pt-6 lg:justify-between">
            <div className="flex flex-col self-center text-sm text-center md:block lg:col-start-1 md:space-x-6">
              <span>©2025 All rights reserved</span>
              <a rel="noopener noreferrer" href="#">
                <span>Privacy policy</span>
              </a>
              <a rel="noopener noreferrer" href="#">
                <span>Terms of service</span>
              </a>
            </div>
            <div className="flex justify-center pt-4 space-x-4 lg:pt-0 lg:col-end-13">
              <a
                rel="noopener noreferrer"
                href="#"
                title="Email"
                className="flex items-center justify-center w-10 h-10 rounded-full dark:bg-violet-600 dark:text-gray-50"
              >
                <FaFacebook />
              </a>
              <a
                rel="noopener noreferrer"
                href="#"
                title="Twitter"
                className="flex items-center justify-center w-10 h-10 rounded-full dark:bg-violet-600 dark:text-gray-50"
              >
                <FaLinkedin />
              </a>
              <a
                rel="noopener noreferrer"
                href="#"
                title="GitHub"
                className="flex items-center justify-center w-10 h-10 rounded-full dark:bg-violet-600 dark:text-gray-50"
              >
                <FaXTwitter />
              </a>
              <a
                rel="noopener noreferrer"
                href="#"
                title="GitHub"
                className="flex items-center justify-center w-10 h-10 rounded-full dark:bg-violet-600 dark:text-gray-50"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
      </footer>
  );
};

export default Footer;
