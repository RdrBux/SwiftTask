import { useContext } from 'react';
import { FolderAdd } from './Icons';
import { DataContext, DataContextType } from '../context/DataContext';
import SidebarButton from './SidebarButton';
import NavButton from './NavButton';

interface Props {
  showModal: any;
}

export default function Sidebar({ showModal }: Props) {
  const { data } = useContext(DataContext) as DataContextType;

  const projectLinks = data.map((project) => (
    <li key={project.id}>
      <NavButton id={project.id} title={project.title} />
    </li>
  ));

  function handleClick() {
    showModal(true);
  }

  return (
    <aside className="hidden p-5 lg:flex flex-col grow-1 shrink-0 w-64 border-r bg-white font-medium">
      <SidebarButton />
      <hr className="mt-5" />
      <h2 className="mt-5 text-zinc-500 text-sm font-bold">
        PROYECTOS ({data.length})
      </h2>
      <ul className="text-zinc-700 text-base my-2 flex flex-col gap-1">
        {projectLinks}
      </ul>
      <button
        onClick={handleClick}
        className="p-2 font-bold flex items-center gap-3 text-orange-900 active:text-orange-100 active:bg-orange-700 bg-orange-100 rounded-lg duration-200 hover:bg-orange-200"
      >
        {FolderAdd} Crear proyecto
      </button>
    </aside>
  );
}
