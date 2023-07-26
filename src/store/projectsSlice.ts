import { createSlice } from '@reduxjs/toolkit';
import { data } from '../mocks/data';
import { Project } from '../types';

export const projectsSlice = createSlice({
  name: 'projects',
  initialState: data,
  reducers: {
    projectRemove(state, action) {
      const { id } = action.payload;
      return state.filter((project) => project.id !== id);
    },
    projectCreate(state, action) {
      const { title, description, id } = action.payload;

      const newProject: Project = {
        id,
        title,
        description,
        tasks: {},
        taskLists: [
          {
            id: 'column-1',
            title: 'Por hacer',
            tasks: [],
          },
          {
            id: 'column-2',
            title: 'En proceso',
            tasks: [],
          },
          {
            id: 'column-3',
            title: 'Realizadas',
            tasks: [],
          },
        ],
      };

      state.push(newProject);
    },
    projectShuffleTasks(state, action) {
      const { updatedProject } = action.payload;
      return state.map((project) =>
        project.id === updatedProject.id ? updatedProject : project
      );
    },
  },
});

export const { projectRemove, projectCreate, projectShuffleTasks } =
  projectsSlice.actions;

export default projectsSlice.reducer;
