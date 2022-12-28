import React from "react";
import { useSelector } from "react-redux";
import Container from "../components/Container";
import Item from "../components/Item";
import Input from "../components/Input";

const Home = () => {
  const todos = useSelector((state) => state.data.todos);
  console.log(todos);
  return (
    <div className="py-5">
      <Container>
        <div className="mx-auto w-1/2">
          <Input />

          <div className="mt-5 overflow-hidden rounded-lg border-2 border-slate-200 shadow-all">
            <div className="flex flex-col divide-y-2 divide-slate-200">
              {todos.length > 0 ? (
                todos.map((todo, index) => (
                  <Item key={index} title={todo.title} date={todo.date} />
                ))
              ) : (
                <p className="p-4">Not Found</p>
              )}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Home;
