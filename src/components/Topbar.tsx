import { useContext } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { DataContext, DataContextType } from '../context/DataContext';

export default function Topbar() {
  const location = useLocation();
  const { data } = useContext(DataContext) as DataContextType;

  const activeProject = data.find(
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
        <h3 className="text-2xl lg:text-3xl font-bold">
          {activeProject?.title ?? 'Inicio'}
        </h3>
        <button className="bg-zinc-300 w-9 h-9 rounded-full"></button>
      </div>
    </div>
  );
}
