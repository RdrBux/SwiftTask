import { useAppSelector } from '../hooks/redux';
import NavButton from './NavButton';

export default function ProjectsList() {
  const projects = useAppSelector((state) => state.projects);

  const projectLinks = projects.map((project) => (
    <li key={project.id}>
      <NavButton id={project.id} title={project.title} />
    </li>
  ));

  return (
    <div>
      <h2 className="mt-5 text-zinc-500 text-sm font-bold">
        PROYECTOS ({projects.length})
      </h2>
      <ul className="text-zinc-700 text-base my-2 flex flex-col gap-1">
        {projectLinks}
      </ul>
    </div>
  );
}
