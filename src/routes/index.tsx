import * as React from "react";
import { Route, Routes } from "react-router";
import TaskList from "../components/task-list";
import FormTask from "../components/create-form";

const RoterLink = () => {
  return (
    <Routes>
      <Route path="/" element={<TaskList />} />
      <Route path="/create-task" element={<FormTask />} />
    </Routes>
  );
}

export default RoterLink;
