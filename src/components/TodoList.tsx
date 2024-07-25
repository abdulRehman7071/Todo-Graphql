"use client";

import React from "react";
import { useQuery, useMutation, gql } from "@apollo/client";
import TodoForm from "./TodoForm";
import { FaTrash } from "react-icons/fa";
import { ClipLoader } from "react-spinners";
import Loader from "./Loader";

const GET_TODOS = gql`
  query GetTodos {
    todos {
      id
      title
      completed
    }
  }
`;

const UPDATE_TODO = gql`
  mutation UpdateTodo($id: ID!, $completed: Boolean!) {
    updateTodo(id: $id, completed: $completed) {
      id
      title
      completed
    }
  }
`;

const DELETE_TODO = gql`
  mutation DeleteTodo($id: ID!) {
    deleteTodo(id: $id) {
      id
      title
      completed
    }
  }
`;

interface Todo {
  id: string;
  title: string;
  completed: boolean;
}

const TodoList: React.FC = () => {
  const { loading, error, data, refetch } = useQuery(GET_TODOS);
  const [updateTodo] = useMutation(UPDATE_TODO);
  const [deleteTodo] = useMutation(DELETE_TODO);

  if (loading) return <Loader />;
  if (error) return <p>Error :(</p>;

  const handleToggle = async (id: string, completed: boolean) => {
    await updateTodo({ variables: { id, completed: !completed } });
    refetch();
  };

  const handleDelete = async (id: string) => {
    await deleteTodo({ variables: { id } });
    refetch();
  };

  return (
    <div className="space-y-4">
      <TodoForm refetch={refetch} />
      {data.todos.map((todo: Todo) => (
        <div
          key={todo.id}
          className="flex items-center space-x-4 p-4 border-b border-gray-200 dark:border-gray-700"
        >
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => handleToggle(todo.id, todo.completed)}
            className="form-checkbox h-5 w-5 text-blue-600 dark:text-blue-400"
          />
          <span className={`flex-1 ${todo.completed ? "line-through" : ""}`}>
            {todo.title}
          </span>
          <button
            onClick={() => handleDelete(todo.id)}
            className="text-red-500 dark:text-red-400 ml-auto"
          >
            <FaTrash />
          </button>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
