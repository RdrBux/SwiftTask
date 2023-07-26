import { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Trash } from './Icons';
import Modal from './Modal';
import RemoveProjectForm from './RemoveProjectForm';
import { useAppSelector } from '../hooks/redux';

export default function Topbar() {
  const [showRemoveProject, setShowRemoveProject] = useState(false);
  const location = useLocation();
  const projects = useAppSelector((state) => state.projects);

  const activeProject = projects.find(
    (project) => `/${project.id}` === location.pathname
  );

  return (
    <div className="bg-white flex items-center border-b">
      <Link to="/" className="flex items-center gap-2 lg:w-64 p-5 border-r">
        <div className="h-8 w-8 bg-orange-400 rounded-full"></div>
        <h1 className="hidden lg:block text-xl font-bold">
          Swift<span className="text-orange-400">Task</span>
        </h1>
      </Link>
      <div className="flex justify-between grow px-8">
        <div className="flex gap-2">
          <h3 className="text-2xl lg:text-3xl font-bold">
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
        <button className="bg-zinc-300 w-9 h-9 rounded-full"></button>
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
