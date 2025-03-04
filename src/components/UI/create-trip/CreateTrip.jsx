import React from "react";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import {travelBudget, travelList} from "../../../constants/options";

const CreateTrip = () => {
  return (
    <section className="sm:px-10 md:px-32 lg:px-56 xl:px-72 px-5 mt-15 mb-15">
      <h2 className="font-bold text-3xl text-red-700">
        Tell us your travel preferences{" "}
      </h2>
      <p className="mt-3 text-gray-500 text-xl">
        Just provide some basic information, and our trip planner will generate
        a customized itinerary based on your preferences.
      </p>
      <div className="mt-10 border-1 border-gray-200 rounded-2xl px-5 py-10">
        <div className="flex flex-col">
          <label className="text-xl font-semibold pb-5">
            Enter Your destination Name
          </label>
          <GooglePlacesAutocomplete
            apiKey={import.meta.env.VITE_GOOGLE_PLACE_API_KEY}
          />
        </div>
        <div className="flex flex-col">
          <label className="text-xl font-semibold pb-5 pt-5">
            How many days are you planning
          </label>

          <input
            type="number"
            placeholder="Ex.."
            className="mt-1 w-full py-2 rounded-m shadow-xs sm:text-sm border-1 border-gray-200"
          />
        </div>

        {/* select opstion section */}
        <section>
          <h2 className="text-xl font-semibold pb-5 pt-5">
            Who do you plan on traveling with on your next adventure?
          </h2>
          <div className="grid grid-cols-4 gap-x-10 gap-y-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2">
            {travelList.map((item) => {
              return (
                <div
                  className="p-3 border-1 border-gray-200 rounded-2xl text-center cursor-pointer "
                  key={item.id}
                >
                  <p className="text font-semibold">{item.tag}</p>
                </div>
              );
            })}
          </div>
        </section>
        <section>
          <h2 className="text-xl font-semibold pb-5 pt-5">
            Select Your budget?
          </h2>
          <div className="grid grid-cols-3 gap-x-10 gap-y-5 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2">
            {travelBudget.map((item) => {
              return (
                <div
                  className="p-3 border-1 border-gray-200 rounded-2xl text-center cursor-pointer "
                  key={item.id}
                >
                  <p className=" font-semibold">{item.category}</p>
                </div>
              );
            })}
          </div>
        </section>
        <div className="mt-10 mb-10">
          <a
            className="inline-flex items-center gap-2 rounded-sm border border-red-700 lg:px-15 px-8 py-3 text-red-700 hover:bg-red-700 hover:text-white focus:ring-3 focus:outline-hidden"
            href="#"
          >
            <span className="text-sm font-medium"> Generate Trip </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CreateTrip;
