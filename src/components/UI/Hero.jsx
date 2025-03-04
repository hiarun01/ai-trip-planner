import {NavLink} from "react-router";

const Hero = () => {
  return (
    <>
      <section className="bg-gray-50 h-[90vh]">
        <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
          <div className="mx-auto max-w-xl text-center h-[60vh]">
            <h1 className="text-3xl font-extrabold sm:text-5xl ">
              Ai Trip Planner <br />
              <strong className="font-extrabold text-red-700 sm:block">
                Discover your next adventure with AI
              </strong>
            </h1>

            <p className="mt-4 sm:text-xl/relaxed">
              Your personal trip planner and travel curator, creating custom
              itineraries tailored to your interests and budg
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <NavLink to="/create-trip">
                <a
                  className="block w-full rounded-sm bg-red-700 px-12 py-3 text-sm font-medium text-white shadow-sm hover:bg-red-700 focus:ring-3 focus:outline-hidden sm:w-auto"
                  href="#"
                >
                  Get Started
                </a>
              </NavLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
