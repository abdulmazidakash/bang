import logoIcon from "../assets/icons/logoIcon.png";
import React from "react";

export default function Footer() {
  return (
    <div className="mt-10 bg-base-200">
      <div className="w-6/12 mx-auto items-center justify-center text-center pt-8">
          <img src={logoIcon} alt="logo" className="w-10 h-10 mx-auto " />
          <h2 className="font-bold text-3xl my-2">Lingo Bingo</h2>
          <p className="font-sans font-medium">
            Helping you expand your vocabulary, one word at a time!
          </p>
        </div>
      <footer className="footer w-9/12 container mx-auto  text-base-content p-10 items-center justify-between">
        
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Interactive Lessons</a>
          <a className="link link-hover">Pronunciation Guides</a>
          <a className="link link-hover">Quiz Mode</a>
          <a className="link link-hover">Personalized Learning</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About Us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Careers</a>
          <a className="link link-hover">Blog</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of Use</a>
          <a className="link link-hover">Privacy Policy</a>
          <a className="link link-hover">Cookie Policy</a>
        </nav>
      </footer>
      <p className="text-center font-semibold py-4">© 2024 All Rights Reserved | Lingo Bingo</p>
    </div>
  );
}