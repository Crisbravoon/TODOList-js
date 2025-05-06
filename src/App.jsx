import "./App.css";
import { TaskForm } from "./components/tasks/taskForm";
import { TasksCard } from "../src/components/card/tasksCard";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <h1 className="bg-indigo-700 text-white">Mis tareas</h1>
        <TaskForm />
        <TasksCard />
        <ToastContainer/>
    </>
  );
}

export default App;
