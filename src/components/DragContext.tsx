import { useParams } from 'react-router-dom';
import TaskSection from './TaskSection';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { projectShuffleTasks } from '../store/projectsSlice';

interface Props {
  showForm: () => void;
}

export default function DragContext({ showForm }: Props) {
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
      showForm={showForm}
      allTasks={projectData.tasks}
    />
  ));

  function onDragEnd(result: DropResult): void {
    // Get relevant data from the event
    const { destination, source } = result;

    // Return if there's an invalid drag
    if (!destination) return;

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    )
      return;

    // Create new project data to add on state
    if (!projectData) return;

    const newProjectData = structuredClone(projectData);

    // Old column
    const column = newProjectData.taskLists.find(
      (col) => col.id === source.droppableId
    );

    if (!column) return;
    const [value] = column.tasks.splice(source.index, 1);

    // New column
    const destColumn = newProjectData.taskLists.find(
      (col) => col.id === destination.droppableId
    );
    if (!destColumn) return;

    // Add value to new column
    destColumn.tasks.splice(destination.index, 0, value);

    dispatch(projectShuffleTasks({ updatedProject: newProjectData }));
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <main className="p-8 flex overflow-auto gap-8">{content}</main>
    </DragDropContext>
  );
}
