import "./App.css";
import { TaskForm } from "./components/tasks/taskForm";
import { TasksCard } from "../src/components/card/tasksCard";

function App() {
  return (
    <>
      <h1 className="bg-indigo-700 text-white">Mis tareas</h1>
        <TaskForm />
        <TasksCard />
    </>
  );
}

export default App;
