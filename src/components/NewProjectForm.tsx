import { SyntheticEvent, useContext, useState } from 'react';
import { Close } from './Icons';
import { DataContext, DataContextType } from '../context/DataContext';
import { Project } from '../types';

interface Props {
  onClose: () => void;
}

export default function NewProjectForm({ onClose }: Props) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const { setData } = useContext(DataContext) as DataContextType;

  function handleSubmit(e: SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();

    const newProject: Project = {
      id: String(Math.random() * 1000000),
      title,
      description,
      tasks: {},
      taskLists: [
        {
          id: 'column-1',
          title: 'Por hacer',
          tasks: [],
        },
        {
          id: 'column-2',
          title: 'En proceso',
          tasks: [],
        },
        {
          id: 'column-3',
          title: 'Realizadas',
          tasks: [],
        },
      ],
    };

    setData((prev) => [...prev, newProject]);

    setTitle('');
    setDescription('');
    onClose();
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
      <div className="font-bold text-2xl">Agregar proyecto</div>
      <label className="flex flex-col">
        <span>Título</span>
        <input
          className="p-2 rounded-lg border-2 border-orange-200 focus:bg-orange-50"
          type="text"
          name="title"
          id="title"
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
          name="project-description"
          id="project-description"
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
