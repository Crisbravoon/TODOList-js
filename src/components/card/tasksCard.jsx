import React from "react";

import { useStoreTask } from "../../store/tasks.store";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";

export const TasksCard = () => {
  const tasks = useStoreTask((state) => state.tasks);

  return (
    <div className="">
      {tasks.length === 0 ? (
        <p className="text-gray-500 mt-5">No hay tareas aún.</p>
      ) : (
        tasks.map((taskItem, index) => (
          <p
            key={index}
            className=" flex justify-between items-center shadow-md mt-4 py-4 px-4 text-xl text-gray-500 bg-gray-100 rounded-md">
            {taskItem}
            <div className="flex justify-between mr-3 gap-3">
              <FaEdit className=" text-3xl text-indigo-800 cursor-pointer hover:text-emerald-600 transition-transform hover:scale-130"/>
              <MdDelete className="text-3xl text-indigo-800 cursor-pointer hover:text-red-600 transition-transform hover:scale-130" />
            </div>
          </p>
        ))
      )}
    </div>
  );
};
