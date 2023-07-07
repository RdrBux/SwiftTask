import { useContext } from 'react';
import { DataContext, DataContextType } from '../context/DataContext';
import { Link } from 'react-router-dom';

export default function Home() {
  const { data } = useContext(DataContext) as DataContextType;

  const displayProjects = data.map((project) => (
    <Link
      key={project.id}
      className="bg-white rounded-lg p-4 shadow h-fit hover:shadow-lg duration-200"
      to={project.id}
    >
      <h4 className="text-3xl font-bold">{project.title}</h4>
      <p className="text-zinc-500 mt-2">{project.description}</p>
    </Link>
  ));

  return (
    <div className="p-8 flex flex-col lg:grid lg:grid-cols-3 gap-8 w-full bg-zinc-100">
      {displayProjects}
    </div>
  );
}
