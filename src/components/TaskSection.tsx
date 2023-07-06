import { TaskSection } from '../types';
import { Plus } from './Icons';
import Task from './Task';

export default function TaskSection({ id, title, taskList }: TaskSection) {
  const colors = {
    'Por hacer': '#7C3AED',
    'En proceso': '#FB923C',
    Realizadas: '#16A34A',
  };

  let color = 'orange';
  if (colors[title]) {
    color = colors[title];
  }

  return (
    <section
      className="flex shrink-0 h-fit w-[300px] flex-col gap-4 p-4 bg-zinc-100 rounded-lg"
      key={id}
    >
      <div className="flex items-center justify-between">
        <h3 className="font-semibold">
          <span style={{ color: color }}>•</span> {title}
        </h3>
        <button
          style={{ color: color, backgroundColor: `${color}30` }}
          className="p-1 rounded-lg"
        >
          {Plus}
        </button>
      </div>
      <hr style={{ border: `1.5px solid ${color}` }} />
      {taskList.map(({ id, title, description }) => (
        <Task key={id} id={id} title={title} description={description} />
      ))}
    </section>
  );
}
