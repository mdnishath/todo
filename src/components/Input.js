import React, { useRef, useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { todoData } from "../store/todoSlice";
import { useSelector } from "react-redux";
const Input = () => {
  const todos = useSelector((state) => state.data.todos);
  const [input, setInput] = useState("");
  const [inputError, setInputError] = useState("");
  const dispatch = useDispatch();

  const inputRef = useRef();

  const handleInput = (e) => {
    setInput(e);
    setInputError("");
  };

  const addTodo = () => {
    const tsk = inputRef.current.value;
    if (tsk) {
      const newTodo = [
        ...todos,
        { title: tsk, date: new Date().toLocaleDateString() },
      ];
      dispatch(todoData(newTodo));
      setInput("");
    } else {
      setInputError("can not be empty");
    }
    console.log(tsk);
  };
  //   console.log(todos);
  return (
    <div>
      <div className=" relative">
        <input
          onChange={(e) => handleInput(e.target.value)}
          className="w-full rounded-md border border-green-400 px-4 py-2 outline-green-600"
          type="text"
          placeholder="Enter your task..."
          value={input}
          ref={inputRef}
        />
        <div className="absolute top-0 right-0 flex h-full items-center rounded-md bg-green-500 p-2">
          <AiOutlinePlus
            onClick={addTodo}
            className=" cursor-pointer text-2xl text-white"
          />
        </div>
      </div>
      {inputError && <p className="bottom-0 pl-2 text-red-500">{inputError}</p>}
    </div>
  );
};

export default Input;
