import {Navigation} from "lucide-react";
import {NavLink} from "react-router";

const Header = () => {
  return (
    <>
      <header className="bg-gray-50 border-b-2 border-gray-200">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="md:flex md:items-center md:gap-12">
              <NavLink to="/">
                <a className="block text-white bg-red-700 font-extrabold border-2 px-3  py-3 rounded-full">
                  <Navigation />
                </a>
              </NavLink>
            </div>

            <div className="hidden md:block">
              <nav aria-label="Global">
                <ul className="flex items-center gap-6 text-sm font-bold">
                  <li>
                    <a
                      className="text-gray-500 transition hover:text-red-700"
                      href="#"
                    >
                      About
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-gray-500 transition hover:text-red-700"
                      href="#"
                    >
                      Contact
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-gray-500 transition hover:text-red-700"
                      href="#"
                    >
                      Service
                    </a>
                  </li>
                </ul>
              </nav>
            </div>

            <div className="flex items-center gap-4">
              <div className=" sm:flex sm:gap-4">
                <a
                  className="rounded-md bg-red-700 px-5 py-2.5 text-sm font-medium text-white shadow-sm "
                  href="#"
                >
                  Get Started
                </a>{" "}
              </div>

              <div className="block md:hidden">
                <button className="rounded-sm bg-red-700 p-2 text-white transition ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
