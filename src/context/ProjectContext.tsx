import { createContext, useState, useEffect } from 'react';
import { Project } from '../types';
import { useLocation } from 'react-router-dom';
import { useAppSelector } from '../hooks/redux';

export type ProjectContextType = {
  activeProject: Project | null;
};

export const ProjectContext = createContext<ProjectContextType>({
  activeProject: null,
});

type Props = {
  children: React.ReactNode;
};

export const ProjectProvider: React.FC<Props> = ({ children }) => {
  const [activeProject, setActiveProject] = useState<ProjectContextType>({
    activeProject: null,
  });
  const projects = useAppSelector((state) => state.projects);
  const location = useLocation();

  useEffect(() => {
    const currProject = projects.find(
      (project) => `/${project.id}` === location.pathname
    );

    if (currProject) {
      setActiveProject({ activeProject: currProject });
    } else {
      setActiveProject({ activeProject: null });
    }
  }, [location, projects]);

  return (
    <ProjectContext.Provider value={activeProject}>
      {children}
    </ProjectContext.Provider>
  );
};
