import { createSlice, nanoid } from '@reduxjs/toolkit';
import { data } from '../mocks/data';
import { Project, Task } from '../types';

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
    taskCreate(state, action) {
      const { projectId, taskData } = action.payload;
      const id = nanoid();

      const project = state.find((project) => project.id === projectId);
      if (project) {
        project.tasks[id] = {
          id,
          title: taskData.title,
          description: taskData.description,
        };

        project.taskLists[0].tasks.push(id);
      }
    },
    taskEdit(state, action) {
      const { projectId, taskData } = action.payload;
      const { id, title, description } = taskData;
      // find project
      const project = state.find((project) => project.id === projectId);

      // edit task
      if (!project) return;
      project.tasks[id] = {
        id,
        title,
        description,
      };
    },
  },
});

export const {
  projectRemove,
  projectCreate,
  projectShuffleTasks,
  taskCreate,
  taskEdit,
} = projectsSlice.actions;

export default projectsSlice.reducer;
