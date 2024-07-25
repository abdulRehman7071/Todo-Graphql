import React from "react";
import TodoList from "@/components/TodoList";
import DarkModeToggle from "@/components/DarkModeToggle";

const Home: React.FC = () => {
  return (
    <div className="container mx-auto p-4 min-h-screen  md:w-1/2 md:px-16 px-8">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Todo App using Graphql</h1>
        <DarkModeToggle />
      </div>
      <TodoList />
    </div>
  );
};

export default Home;
