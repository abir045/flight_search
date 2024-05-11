import React, { useState } from "react";
import DatePicker from "react-datepicker";

const Form = () => {
  const [active, setActive] = useState("active");
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div className="flex flex-col ">
      <h1 className="font-bold text-[36px] pl-[17%] border-b">Master Price</h1>
      <form>
        <div className="flex  items-center justify-center pt-5 ">
          <button className="border border-black px-6 py-1 text-sm font-bold rounded-none">
            {" "}
            Round Trip{" "}
          </button>
          <button
            className="border-black px-6 py-1 text-sm font-bold rounded-none"
            style={{
              backgroundColor: active === "active" ? "#1a1687" : "",
              color: active === "active" ? "white" : "",
            }}
          >
            {" "}
            One Way{" "}
          </button>
          <button className="border-black px-6 py-1 text-sm font-bold rounded-none">
            {" "}
            Multi city{" "}
          </button>
        </div>

        {/* inputs */}
        {/* <hr className="mt-8 border-indigo-600 w-[80%] justify-center"></hr> */}

        <div className="mx-[17%] flex gap-2 border-t border-b border-indigo-600 mt-5 py-5 font-bold">
          <input
            type="text"
            id="name"
            name="name"
            required
            placeholder="LHR"
            size="10"
            className="border border-black  px-6 py-2 font-bold"
          />
          <input
            type="text"
            id="name"
            name="name"
            required
            placeholder="CDG"
            size="10"
            className="border border-black px-6 py-2 font-bold"
          />
          <DatePicker
            className="border border-black text-center py-2 font-bold"
            selected={startDate}
            onChange={(date) => setStartDate(date)}
          />
          {/* <label htmlFor="pet-select">Choose a pet:</label> */}
          <select
            name="date"
            id="date-select"
            className="border border-black px-3 font-bold"
          >
            <option value="">Day -</option>
            <option value="dog">Dog</option>
            <option value="cat">Cat</option>
            <option value="hamster">Hamster</option>
            <option value="parrot">Parrot</option>
            <option value="spider">Spider</option>
            <option value="goldfish">Goldfish</option>
          </select>
          <select
            name="date2"
            id="date-select2"
            className="border border-black px-3 font-bold"
          >
            <option value="">Day +</option>
          </select>
          <select
            name="time-select"
            id="date-select3"
            className="border border-black text-center pr-[8%] font-bold"
          >
            <option value="any time" className="text-left">
              Any time
            </option>
          </select>
          +
          <select
            name="passenger"
            id="passenger-select"
            className="border border-black text-center pr-10 px-6 font-bold"
          >
            <option value="Adult">ADT</option>
          </select>
          <select
            name="number-of-paasenger"
            id="number-of-paasenger"
            className="border border-black text-center pr-10 px-6 font-bold"
          >
            <option value="1">1</option>
            <option value="2">2</option>
          </select>
          +
        </div>

        <div className="flex justify-between items-center mx-[17%] border-b border-indigo-600 gap-5">
          <div className="flex gap-2 py-5">
            <input type="checkbox" id="horns" name="horns" />
            <label className="font-bold" htmlFor="extra">
              Extra Options
            </label>
          </div>

          <div className="flex gap-5 items-center">
            <div className="font-bold">Environment</div>

            <div className="flex gap-2">
              <input type="radio" id="huey" name="drone" value="huey" checked />
              <label className="font-bold" htmlFor="huey">
                Dummy
              </label>
            </div>

            <div className="flex gap-2">
              <input type="radio" id="dewey" name="drone" value="dewey" />
              <label className="font-bold" htmlFor="dewey">
                PDT
              </label>
            </div>
          </div>

          <button className="text-white bg-indigo-900 rounded-none font-bold py-1 px-8 ">
            SEARCH
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
