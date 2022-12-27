import React from "react";
import { BsTrash } from "react-icons/bs";
import { BiEdit } from "react-icons/bi";

const Item = ({ title, date }) => {
  return (
    <div className="flex cursor-pointer select-none items-center justify-between p-4 py-2 odd:bg-white even:bg-slate-50">
      <div className="flex gap-x-2 ">
        <span className=" text-[12px] text-slate-400">{date}</span>
        <p className="text-sm text-slate-700">{title}</p>
      </div>
      <div className="flex gap-x-3">
        <BiEdit className="text-sm text-green-500" />
        <BsTrash className="text-sm text-red-500" />
      </div>
    </div>
  );
};

export default Item;
