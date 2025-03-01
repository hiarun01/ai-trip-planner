import {Navigation} from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="bg-gray-50 border-t-2 border-gray-200">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="sm:flex sm:items-center sm:justify-center sm:gap-3">
            <p className="mt-4 text-center text-1xl font-bold text-gray-500 sm:mt-0 sm:order-1">
              Built by : ❤️{" "}
              <a
                className="text-red-700 hover:text-red-800"
                href="https://x.com/hiarun01"
              >
                @hiarun01
              </a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
