import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Trash } from './Icons';
import Modal from './Modal';
import RemoveProjectForm from './RemoveProjectForm';
import { ProjectContext, ProjectContextType } from '../context/ProjectContext';

export default function Topbar() {
  const [showRemoveProject, setShowRemoveProject] = useState(false);

  const { activeProject } = useContext(ProjectContext) as ProjectContextType;
  return (
    <div className="bg-white flex items-center border-b">
      <Link
        to="/"
        className="flex shrink-0 items-center gap-2 lg:w-64 p-5 border-r"
      >
        <div className="h-8 w-8 bg-orange-400 rounded-full"></div>
        <h1 className="hidden lg:block text-xl font-bold">
          Swift<span className="text-orange-400">Task</span>
        </h1>
      </Link>
      <div className="flex justify-between grow px-8">
        <div className="flex gap-2">
          <h3 className="text-2xl lg:text-3xl font-bold truncate max-w-[100px] md:max-w-none">
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
