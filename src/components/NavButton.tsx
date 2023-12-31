import { NavLink } from 'react-router-dom';
import { Project } from '../types';
import { Folder } from './Icons';

interface Props {
  id: Project['id'];
  title: Project['title'];
}

export default function NavButton({ id, title }: Props) {
  return (
    <NavLink
      title={title}
      className={({ isActive }) =>
        `${
          isActive
            ? 'text-zinc-900 bg-zinc-200 hover:bg-zinc-300'
            : 'text-zinc-500'
        } flex items-center font-semibold p-2 gap-3 rounded-lg duration-200 hover:bg-zinc-100 active:bg-zinc-600 active:text-white`
      }
      to={`/${id}`}
    >
      <span className="shrink-0">{Folder}</span>{' '}
      <span className="truncate">{title}</span>
    </NavLink>
  );
}
