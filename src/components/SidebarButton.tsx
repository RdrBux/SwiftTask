import { NavLink } from 'react-router-dom';
import { Squares } from './Icons';

export default function SidebarButton() {
  return (
    <NavLink
      className={({ isActive }) =>
        `${
          isActive ? 'text-zinc-900 bg-zinc-200' : 'text-zinc-500'
        } flex p-2 items-center gap-3 font-semibold hover:bg-zinc-100 duration-200 rounded-lg`
      }
      to="/"
    >
      {Squares} Inicio
    </NavLink>
  );
}
