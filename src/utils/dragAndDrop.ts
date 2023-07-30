import { DropResult } from 'react-beautiful-dnd';
import { Project } from '../types';

export function handleChange(
  projectData: Project,
  result: DropResult
): Project | void {
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

  return newProjectData;
}
