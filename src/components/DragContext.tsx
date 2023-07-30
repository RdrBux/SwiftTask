import { useParams } from 'react-router-dom';
import TaskSection from './TaskSection';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { projectShuffleTasks } from '../store/projectsSlice';
import Draggable from './Draggable';
import { handleChange } from '../utils/dragAndDrop';

export default function DragContext() {
  const { id } = useParams();

  const projects = useAppSelector((state) => state.projects);
  const dispatch = useAppDispatch();

  const projectData = projects.find((project) => project.id === id);

  if (!projectData) return;

  const content = projectData.taskLists.map(({ id, title, tasks }) => (
    <TaskSection
      key={id}
      id={id}
      tasks={tasks}
      title={title}
      allTasks={projectData.tasks}
    />
  ));

  function onDragEnd(result: DropResult): void {
    if (!projectData) return;

    const newProjectData = handleChange(projectData, result);

    dispatch(projectShuffleTasks({ updatedProject: newProjectData }));
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <main className="p-8 flex overflow-auto gap-8 cursor-grab">
        {content}
      </main>
    </DragDropContext>
  );
}
