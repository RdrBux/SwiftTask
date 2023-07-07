import { TaskList, Tasks } from '../types';
import { Plus } from './Icons';
import Task from './Task';

interface Props extends TaskList {
  allTasks: Tasks;
}

export default function TaskSection({ id, title, tasks, allTasks }: Props) {
  const colors = {
    'Por hacer': '#7C3AED',
    'En proceso': '#FB923C',
    Realizadas: '#16A34A',
  };

  let color = 'orange';
  if (colors[title]) {
    color = colors[title];
  }

  function displayTasks() {
    if (tasks.length < 1) return;
    return tasks.map((value) => {
      const { id, title, description } = allTasks[value];
      return <Task key={id} id={id} title={title} description={description} />;
    });
  }

  return (
    <section
      className="flex shrink-0 h-fit w-[300px] flex-col gap-4 p-4 bg-zinc-100 rounded-lg"
      key={id}
    >
      <div className="flex items-center relative justify-between">
        <h3 className="font-semibold">
          <span style={{ color: color }}>•</span> {title}
        </h3>
        <button className="p-4 absolute -right-4">
          <div
            style={{ color: color, backgroundColor: `${color}30` }}
            className="p-1 rounded-lg"
          >
            {Plus}
          </div>
        </button>
      </div>
      <hr style={{ border: `1.5px solid ${color}` }} />
      {displayTasks()}
    </section>
  );
}
