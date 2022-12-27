import React from "react";
import { useSelector } from "react-redux";
import Container from "../components/Container";
import { AiOutlinePlus } from "react-icons/ai";
import Item from "../components/Item";

const Home = () => {
  const data = useSelector((state) => state);
  console.log(data);
  return (
    <div className="py-5">
      <Container>
        <div className="mx-auto w-1/2">
          <div className=" relative">
            <input
              className="w-full rounded-md border border-green-400 px-4 py-2 outline-green-600"
              type="text"
              placeholder="Enter your task..."
            />
            <div className="absolute top-0 right-0 flex h-full items-center rounded-md bg-green-500 p-2">
              <AiOutlinePlus className=" cursor-pointer text-2xl text-white" />
            </div>
          </div>

          <div className="mt-5 overflow-hidden rounded-lg border-2 border-slate-200 shadow-all">
            <div className="flex flex-col divide-y-2 divide-slate-200">
              <Item title="item 1" date="12 Dec" />
              <Item title="item 2" date="13 Dec" />
              <Item title="item 3" date="14 Dec" />
              <Item title="item 4" date="15 Dec" />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Home;
