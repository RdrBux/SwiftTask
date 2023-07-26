import { useState } from 'react';
import { Close } from './Icons';

interface Props {
  onClose: () => void;
}

export default function TaskForm({ onClose }: Props) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    console.log('clicked');
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white relative shadow min-w-[300px] lg:min-w-[400px] p-8 rounded-lg flex flex-col gap-4"
    >
      <button
        onClick={onClose}
        type="button"
        className="absolute top-0 right-0 p-4 text-zinc-500"
      >
        {Close}
      </button>
      <div className="font-bold text-2xl">Agregar tarea</div>
      <label className="flex flex-col">
        <span>Título</span>
        <input
          className="p-2 rounded-lg border-2 border-orange-200 focus:bg-orange-50"
          type="text"
          name="task-title"
          id="task-title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </label>

      <label className="flex flex-col">
        <span>Descripción (opcional)</span>
        <input
          className="p-2 rounded-lg border-2 border-orange-200 focus:bg-orange-50"
          type="text"
          name="task-description"
          id="task-description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </label>

      <button className="py-3 bg-orange-700 text-white rounded-lg shadow font-bold hover:shadow-lg duration-200">
        Agregar
      </button>
    </form>
  );
}
