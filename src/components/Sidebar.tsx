import { CloseMini, FolderAdd } from './Icons';
import SidebarButton from './SidebarButton';
import NavButton from './NavButton';
import { useAppSelector } from '../hooks/redux';
import HintCard from './HintCard';

interface Props {
  showModal: (arg0: boolean) => void;
  menuActive: boolean;
  setMenuActive: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Sidebar({
  showModal,
  menuActive,
  setMenuActive,
}: Props) {
  const projects = useAppSelector((state) => state.projects);

  const projectLinks = projects.map((project) => (
    <li key={project.id}>
      <NavButton id={project.id} title={project.title} />
    </li>
  ));

  function handleClick() {
    showModal(true);
  }

  function handleCloseMenu() {
    setMenuActive(false);
  }

  return (
    <>
      <aside
        className={`${
          menuActive ? 'absolute lg:relative flex' : 'hidden'
        } z-10 top-0 bottom-0 left-0 p-5 flex-col grow-1 shrink-0 w-64 border-r bg-white font-medium`}
      >
        <SidebarButton />
        <hr className="mt-5" />
        <h2 className="mt-5 text-zinc-500 text-sm font-bold">
          PROYECTOS ({projects.length})
        </h2>
        <ul className="text-zinc-700 text-base my-2 flex flex-col gap-1">
          {projectLinks}
        </ul>
        <button
          onClick={handleClick}
          className="p-2 font-bold w-full flex items-center gap-3 text-orange-900 active:text-orange-100 active:bg-orange-700 bg-orange-200 rounded-lg duration-200 hover:bg-orange-300"
        >
          {FolderAdd} Crear proyecto
        </button>
        <div className="flex items-end grow">
          <HintCard />
        </div>
      </aside>
      <div
        onClick={handleCloseMenu}
        className={`${
          menuActive ? 'block' : 'hidden'
        } bg-black/20 lg:hidden absolute inset-0 h-full w-full`}
      ></div>
    </>
  );
}
