
import { useState } from "react";
import { useStoreTask } from "../../store/tasks.store";
import { useShallow } from "zustand/shallow";
import { Bounce, toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const TaskForm = () => {

  const [taskForm, setTaskForm] = useState("");

  const addTask = useStoreTask(useShallow((state) => state.addTask));

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(taskForm);
  
    setTaskForm("");
  };

  return (
    <div className="bg-gray-100 rounded-md shadow-md w-full">
      <form className="flex w-full gap-3 px-4 py-4" onSubmit={handleSubmit}>
        <input
          id="tasks"
          type="text"
          className="flex-1 form-control"
          placeholder="Ejem. Estudiar ingles."
          value={taskForm}
          onChange={(e) => setTaskForm(e.target.value)}
        />
        <button
          type="submit"
          className="rounded font-bold bg-indigo-700 cursor-pointer text-white p-3 py-2  hover:bg-indigo-600">
          Guardar
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};
