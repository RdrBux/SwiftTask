import { useState } from 'react';
import { Close } from './Icons';
import { useAppDispatch } from '../hooks/redux';
import { nanoid } from '@reduxjs/toolkit';
import { projectCreate } from '../store/projectsSlice';
import { useNavigate } from 'react-router-dom';

interface Props {
  onClose: () => void;
}

export default function NewProjectForm({ onClose }: Props) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const id = nanoid();

    dispatch(projectCreate({ title, description, id }));

    setTitle('');
    setDescription('');

    navigate(`/${id}`);

    onClose();
  }

  return (
    <form
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
      <div className="font-bold text-2xl">Agregar proyecto</div>
      <label className="flex flex-col gap-2">
        <span className="text-sm">Título</span>
        <input
          className="p-2 rounded-lg border border-zinc-300 focus:outline-orange-300"
          type="text"
          name="title"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </label>
      <label className="flex flex-col gap-2">
        <span className="text-sm">Descripción (opcional)</span>
        <input
          className="p-2 rounded-lg border-2 border-zinc-300 focus:outline-orange-300"
          type="text"
          name="project-description"
          id="project-description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </label>
      <button className="py-3 bg-orange-600 text-white rounded-lg shadow font-bold hover:bg-orange-700 active:bg-orange-800">
        Agregar
      </button>
    </form>
  );
}
