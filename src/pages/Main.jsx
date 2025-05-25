import React, { useState } from "react";

function Main() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [value, setValue] = useState("");

  return (
    <div className="h-screen w-full flex flex-col justify-center items-center text-3xl rounded-2xl">
      <div className="" >
        <p className="p-5 text-3xl lg:text-5xl font-bold ">FAST CALCULATOR</p>
        <div className=" flex flex-col justify-center items-center gap-10 ">
          <div className="flex items-center justify-around gap-5 border rounded-2xl w-30 h-10">
            <p className="">{num1}</p>
            <button
            className="text-2xl border h-10 w-10 rounded-2xl bg-blue-600 "
              onClick={() => {
                setNum1(num1 + 1);
              }}
            >
              +1
            </button>
          </div>
          <div className="flex items-center justify-around gap-5 border rounded-2xl w-30 h-10">
            <p>{num2}</p>
            <button
            className="text-2xl border h-10 w-10 rounded-2xl  bg-blue-600 "
              onClick={() => {
                setNum2(num2 + 1);
              }}
            >
              +1
            </button>
          </div>
        </div>
      </div>
      <div className="flex w-full justify-center items-center gap-5 mt-10">
        <button
        className="text-2xl border h-10 w-10 rounded-2xl" 
          onClick={() => {
            setValue(num1 + num2);
          }}
        >
          +
        </button>

        <button
        className="text-2xl border h-10 w-10 rounded-2xl"
          onClick={() => {
            setValue(num1 - num2);
          }}
        >
          -
        </button>

        <button
        className="text-2xl border h-10 w-10 rounded-2xl"
          onClick={() => {
            setValue(num1 * num2);
          }}
        >
          *
        </button>

        <button
        className="text-2xl border h-10 w-10 rounded-2xl"
          onClick={() => {
            setValue(num1 / num2);
          }}
        >
          /
        </button>
      </div>
      <div className="flex mt-10">
        <p>value</p>
        <p className="border w-20 text-center rounded-2xl">{value}</p>
      </div>
    </div>
  );
}

export default Main;
