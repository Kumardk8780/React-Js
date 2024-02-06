import { createSlice, nanoid } from "@reduxjs/toolkit";
import React, { useState } from "react";

// const [input,setInput] = useState('')

const initialState = {
  todos: [{ id: 1, text: "Hello World" }],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
      };
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((prev) => prev.id !== action.payload);
    },
    updateTodo: (state, action) => {
      const todoIndex = state.todos.findIndex(
        (prev) => prev.id === action.payload.id
      );
      if (todoIndex !== -1) {
        state.todos[todoIndex].text = action.payload.newText;
        // Update other properties as needed
      }
    },
  },
});

export const { addTodo, removeTodo, updateTodo } = todoSlice.actions;

export default todoSlice.reducer;
