import { useContext } from 'react';
import DragContext from './DragContext';
import Modal from './Modal';
import TaskForm from './TaskForm';
import { TaskContext, TaskContextType } from '../context/TaskContext';

export default function Main() {
  const { taskData, clearData } = useContext(TaskContext) as TaskContextType;

  return (
    <>
      <Modal open={taskData.active} onClose={() => clearData()}>
        <TaskForm onClose={() => clearData()} />
      </Modal>
      <DragContext />
    </>
  );
}
