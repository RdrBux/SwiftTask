import { Task } from '../types';
import { Draggable } from 'react-beautiful-dnd';

interface Props extends Task {
  index: number;
}

export default function Task({ id, title, description, index }: Props) {
  return (
    <Draggable draggableId={id} index={index} key={id}>
      {(provided) => (
        <div
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          className="p-4 mb-2 rounded-lg bg-white shadow font-bold"
        >
          <h4>{title}</h4>
          <p className="text-zinc-600 text-xs font-medium mt-1">
            {description}
          </p>
        </div>
      )}
    </Draggable>
  );
}
