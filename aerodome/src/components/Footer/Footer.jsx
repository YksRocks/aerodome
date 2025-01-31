import {
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
  YoutubeIcon,
} from "lucide-react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="w-full h-auto flex flex-col pt-4 justify-center z-[100] p-6 bg-[#0F0F0F] top-0 items-center">
      {/* Navigation Links */}
      <div className="text-[14px] sm:text-[18px] font-semibold text-white flex flex-wrap justify-center gap-4 sm:gap-6">
        <Link to="/" className="cursor-pointer">
          Home
        </Link>
        <Link to="/technology" className="cursor-pointer">
          Technology
        </Link>
        <Link to="/portfolio" className="cursor-pointer">
          Portfolio
        </Link>

        <Link to="/team" className="cursor-pointer">
          Team
        </Link>
        <Link to="/contact-us" className="cursor-pointer">
          Contact
        </Link>
        {/* <Link to="/contact-us" className="cursor-pointer">
          Privacy Policy
        </Link> */}
      </div>

      {/* Social Links */}
      <div className="flex pt-4 items-center text-white justify-center gap-4">
        <a
          href="#"
          aria-label="Instagram"
          className="hover:text-blue-500 transition-colors flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 bg-[#ffffff0a] rounded-full"
        >
          <InstagramIcon className="w-5 h-5" />
        </a>
        {/* <a
          href="#"
          aria-label="Twitter"
          className="hover:text-blue-500 transition-colors flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 bg-[#ffffff0a] rounded-full"
        >
          <TwitterIcon className="w-5 h-5" />
        </a> */}
        <a
          href="#"
          aria-label="YouTube"
          className="hover:text-blue-500 transition-colors flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 bg-[#ffffff0a] rounded-full"
        >
          <YoutubeIcon className="w-5 h-5" />
        </a>
        <a
          href="#"
          aria-label="LinkedIn"
          className="hover:text-blue-500 transition-colors flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 bg-[#ffffff0a] rounded-full"
        >
          <LinkedinIcon className="w-5 h-5" />
        </a>
      </div>

      {/* Footer Text */}
      <div className="text-white pt-4 text-center text-[12px] sm:text-[14px]">
        <p>©️2024 AeroDome || All Right Reserved</p>
      </div>
    </div>
  );
}

export default Footer;
