import { useContext } from 'react';
import { TaskContext, TaskContextType } from '../context/TaskContext';
import { Task } from '../types';
import { Draggable } from 'react-beautiful-dnd';

interface Props extends Task {
  index: number;
}

export default function Task({ id, title, description, index }: Props) {
  const { showData } = useContext(TaskContext) as TaskContextType;

  function handleClick() {
    showData({ id, title, description });
  }

  return (
    <Draggable draggableId={id} index={index} key={id}>
      {(provided) => (
        <div
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          className="p-4 mb-2 rounded-lg bg-white shadow font-bold"
          onClick={handleClick}
        >
          <h4 className="text-ellipsis overflow-hidden">{title}</h4>
          <p className="text-zinc-600 text-xs font-medium mt-1 text-ellipsis overflow-hidden">
            {description}
          </p>
        </div>
      )}
    </Draggable>
  );
}
