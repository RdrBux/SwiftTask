import { useState, useContext } from 'react';
import { Hamburger, Trash } from './Icons';
import Modal from './Modal';
import RemoveProjectForm from './RemoveProjectForm';
import { ProjectContext, ProjectContextType } from '../context/ProjectContext';
import { Link } from 'react-router-dom';

type Props = {
  menuActive: boolean;
  setMenuActive: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Topbar({ menuActive, setMenuActive }: Props) {
  const [showRemoveProject, setShowRemoveProject] = useState(false);

  const { activeProject } = useContext(ProjectContext) as ProjectContextType;

  function handleShowMenu() {
    setMenuActive((prev) => !prev);
  }

  return (
    <div className="bg-white h-16 flex items-center border-b">
      <div
        className={`${
          menuActive
            ? 'w-64 absolute lg:relative bg-white top-0 left-0 z-20'
            : 'w-fit'
        } flex shrink-0 items-center border-b gap-2 w-64 px-4 h-16 border-r`}
      >
        <button
          onClick={handleShowMenu}
          className="w-8 h-8 grid place-content-center lg:hidden"
        >
          {Hamburger}
        </button>
        <Link
          to="/"
          className={`${menuActive ? '' : 'hidden'} flex gap-2 items-center`}
        >
          <div className="h-8 w-8 bg-orange-400 rounded-full"></div>
          <h1 className="text-xl font-bold">
            Swift<span className="text-orange-400">Task</span>
          </h1>
        </Link>
      </div>
      <div className="flex justify-between grow px-8">
        <div className="flex gap-2">
          <h3 className="text-2xl lg:text-3xl font-bold truncate max-w-[30vw] md:max-w-none">
            {activeProject?.title ?? 'Inicio'}
          </h3>
          {activeProject && (
            <button
              onClick={() => setShowRemoveProject(true)}
              className="px-4 text-zinc-300 hover:text-red-500 duration-200"
            >
              {Trash}
            </button>
          )}
        </div>
        <button className="bg-zinc-300 shrink-0 w-9 h-9 rounded-full"></button>
      </div>
      {activeProject && (
        <Modal
          open={showRemoveProject}
          onClose={() => setShowRemoveProject(false)}
        >
          <RemoveProjectForm
            name={activeProject.title}
            id={activeProject.id}
            onClose={() => setShowRemoveProject(false)}
          />
        </Modal>
      )}
    </div>
  );
}
