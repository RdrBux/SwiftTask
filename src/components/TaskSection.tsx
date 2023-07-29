import { useContext } from 'react';
import { TaskContext, TaskContextType } from '../context/TaskContext';
import { TaskList, Tasks } from '../types';
import { Plus } from './Icons';
import Task from './Task';
import { Droppable } from 'react-beautiful-dnd';

interface Props extends TaskList {
  allTasks: Tasks;
}

export default function TaskSection({ id, title, tasks, allTasks }: Props) {
  const { showEmptyData } = useContext(TaskContext) as TaskContextType;

  const colors = {
    'Por hacer': '#7C3AED',
    'En proceso': '#FB923C',
    Realizadas: '#10B981',
  };

  let color = 'orange';
  if (colors[title]) {
    color = colors[title];
  }

  function displayTasks() {
    if (tasks.length < 1) return <></>;
    return tasks.map((value, index) => {
      const { id, title, description } = allTasks[value];
      return (
        <Task
          key={id}
          id={id}
          title={title}
          description={description}
          index={index}
        />
      );
    });
  }

  return (
    <section
      className="flex shrink-0 h-fit w-[70vw] md:w-[300px] flex-col gap-4 p-4 pb-2 bg-zinc-100 rounded-lg"
      key={id}
    >
      <div className="flex items-center relative justify-between">
        <h3 className="font-semibold">
          <span style={{ color: color }}>•</span> {title}
        </h3>
      </div>
      <hr style={{ border: `1.5px solid ${color}` }} />
      <Droppable droppableId={id} key={id}>
        {(provided) => (
          <div
            className="min-h-[1rem]"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {displayTasks()}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
      {title === 'Por hacer' && (
        <button
          onClick={() => showEmptyData()}
          className="flex duration-200 items-center gap-2 rounded-lg text-zinc-500 hover:bg-zinc-200 text-sm font-semibold px-4 py-2 -mt-4"
        >
          {Plus} Agregar una tarea
        </button>
      )}
    </section>
  );
}
