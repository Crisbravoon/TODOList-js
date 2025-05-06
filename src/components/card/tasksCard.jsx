import React, { useEffect } from "react";

import { useStoreTask } from "../../store/tasks.store";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { useShallow } from "zustand/shallow";
import 'animate.css';

export const TasksCard = () => {
  const deletedTask = useStoreTask(useShallow((state) => state.deletedTask));
  const fetchTasks = useStoreTask((state) => state.fetchTasks);
  const tasks = useStoreTask((state) => state.tasks);

  useEffect(() => {
    const loadTasks = async () => {
      await fetchTasks();
    };
    loadTasks();
  }, [fetchTasks]);

  return (
    <div className="">
      {tasks.length === 0 ? (
        <p className="text-gray-500 mt-5">No hay tareas aún.</p>
      ) : (
        tasks.map((taskItem) => (
          <span
            key={taskItem.id}
            className=" animate__animated animate__fadeInDown flex justify-between items-center shadow-md mt-4 py-4 px-4 text-xl text-gray-500 bg-gray-100 rounded-md">
            {taskItem.tasks}
            <div className="flex justify-between mr-3 gap-3">
              <FaEdit className=" text-3xl text-indigo-800 cursor-pointer hover:text-emerald-600 transition-transform hover:scale-130" />
              <MdDelete
                onClick={() => deletedTask(taskItem.id)}
                className="  text-3xl text-indigo-800 cursor-pointer hover:text-red-600 transition-transform hover:scale-130"
              />
            </div>
          </span>
        ))
      )}
    </div>
  );
};
