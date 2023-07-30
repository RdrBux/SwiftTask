import { useContext, useRef } from 'react';
import { Close } from './Icons';
import { useAppDispatch } from '../hooks/redux';
import { taskCreate, taskEdit } from '../store/projectsSlice';
import { ProjectContext, ProjectContextType } from '../context/ProjectContext';
import { TaskContext, TaskContextType } from '../context/TaskContext';

interface Props {
  onClose: () => void;
}

export default function TaskForm({ onClose }: Props) {
  const { taskData } = useContext(TaskContext) as TaskContextType;

  const dispatch = useAppDispatch();
  const { activeProject } = useContext(ProjectContext) as ProjectContextType;
  const form = useRef<HTMLFormElement>(null);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!activeProject || !form.current) return;

    const data = new FormData(e.target as HTMLFormElement);

    if (taskData.data.id) {
      dispatch(
        taskEdit({
          projectId: activeProject.id,
          taskData: {
            id: taskData.data.id,
            title: data.get('task-title'),
            description: data.get('task-description'),
          },
        })
      );
    } else {
      dispatch(
        taskCreate({
          projectId: activeProject.id,
          taskData: {
            title: data.get('task-title'),
            description: data.get('task-description'),
          },
        })
      );
    }

    form.current.reset();

    onClose();
  }

  return (
    <form
      ref={form}
      onSubmit={handleSubmit}
      className="bg-white relative shadow min-w-[300px] lg:min-w-[400px] p-8 rounded-lg flex flex-col gap-6"
    >
      <button
        onClick={onClose}
        type="button"
        className="absolute top-0 right-0 p-4 text-zinc-500"
      >
        {Close}
      </button>
      <div className="font-bold text-2xl">
        {taskData.data.id ? 'Editar' : 'Agregar'} tarea
      </div>
      <label className="flex flex-col gap-2">
        <span className="text-sm">Título</span>
        <input
          className="p-2 rounded-lg border border-zinc-300 focus:outline-orange-300"
          autoFocus
          type="text"
          name="task-title"
          id="task-title"
          defaultValue={taskData.data.title}
          required
        />
      </label>

      <label className="flex flex-col gap-2">
        <span className="text-sm">Descripción (opcional)</span>
        <input
          className="p-2 rounded-lg border border-zinc-300 focus:outline-orange-300"
          type="text"
          name="task-description"
          id="task-description"
          defaultValue={taskData.data.description}
        />
      </label>

      <button className="py-3 bg-orange-600 text-white rounded-lg shadow font-bold hover:bg-orange-700 active:bg-orange-800">
        Guardar
      </button>
    </form>
  );
}
