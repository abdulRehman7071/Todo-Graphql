import React, { useState } from "react";
import { useMutation, gql } from "@apollo/client";

const CREATE_TODO = gql`
  mutation CreateTodo($title: String!) {
    createTodo(title: $title) {
      id
      title
      completed
    }
  }
`;

const TodoForm: React.FC<{ refetch: () => void }> = ({ refetch }) => {
  const [title, setTitle] = useState("");
  const [createTodo] = useMutation(CREATE_TODO);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await createTodo({ variables: { title } });
    setTitle("");
    refetch();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 mb-4">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border border-gray-300 dark:border-gray-700 rounded px-4 py-2 w-full bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
        placeholder="Add a new todo"
      />
      <button
        type="submit"
        className="bg-blue-500 dark:bg-blue-600 text-white px-4 py-2 rounded w-full"
      >
        Add Todo
      </button>
    </form>
  );
};

export default TodoForm;
