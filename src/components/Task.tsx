import { Task } from '../types';

export default function Task({ id, title, description }: Task) {
  return (
    <div className="p-4 rounded-lg bg-white shadow font-bold">
      <h4>{title}</h4>
      <p className="text-zinc-600 text-xs font-medium mt-1">{description}</p>
    </div>
  );
}
