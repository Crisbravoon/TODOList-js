import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import {
  addDoc,
  collection,
  deleteDoc,
  getDocs,
  doc,
} from "firebase/firestore";
import { db } from "../Firebase/Firebase";
import { toast } from "react-toastify";

export const useStoreTask = create(
  persist(
    devtools((set) => ({
      tasks: [],

      fetchTasks: async () => {
        const querySnapshot = await getDocs(collection(db, "tasks"));
        const fetchTasks = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        set({ tasks: fetchTasks });
      },

      addTask: async (task) => {
        try {
          const docRef = await addDoc(collection(db, "tasks"), {
            tasks: task,
          });

          //Agregamos a FireStore con estado actualizado
          set((state) => ({
            tasks: [{ id: docRef.id, tasks: task }, ...state.tasks],
          }));

          toast.success("Tarea agregada con éxito!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });

        } catch (error) {
          console.log("Error adding task:", error);
          toast.error("Error al agregar la tarea", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "colored",
          });
        }
      },

      deletedTask: async (id) => {
        try {
          await deleteDoc(doc(db, "tasks", id));
          set((state) => ({
            tasks: state.tasks.filter((task) => task.id !== id),
          }));

          toast.success("Tarea eliminada con éxito!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
        } catch (error) {
          console.log("Error deleted task:", error);
          toast.error("Error al eliminar la tarea", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "colored",
          });
        }
      },
    }))
  ),
  {
    name: "taskStore",
  }
);
