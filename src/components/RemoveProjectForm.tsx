import { SyntheticEvent } from 'react';
import { Project } from '../types';
import { useNavigate } from 'react-router-dom';
import { projectRemove } from '../store/projectsSlice';
import { useAppDispatch } from '../hooks/redux';

interface Props {
  name: Project['title'];
  id: Project['id'];
  onClose: () => void;
}

export default function RemoveProjectForm({ name, id, onClose }: Props) {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  function handleSubmit(e: SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();
    dispatch(projectRemove({ id }));
    onClose();
    navigate('/');
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow min-w-[300px] lg:min-w-[400px] p-8 rounded-lg flex flex-col gap-6"
    >
      <div className="font-bold text-2xl">Eliminar proyecto</div>
      <p>
        ¿Desea remover el proyecto: <b>{name}</b> ?
      </p>
      <div className="flex gap-4 font-bold">
        <button className="py-2 px-4 border-2 text-red-500 border-red-500 rounded-lg">
          Eliminar
        </button>
        <button onClick={onClose} type="button" className="py-2 px-4">
          Cancelar
        </button>
      </div>
    </form>
  );
}
