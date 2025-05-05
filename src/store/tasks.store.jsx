import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

export const useStoreTask = create(
  persist(
    devtools((set) => ({
      tasks: [],

      addTask: (task) =>
        set((state) => ({
          tasks: [...state.tasks, task],
        })),
        
    }))
  ),
  {
    name: "taskStore",
  }
);
