import { useContext, useState } from 'react';
import DragContext from './DragContext';
import Modal from './Modal';
import TaskForm from './TaskForm';
import { useParams } from 'react-router-dom';
import { DataContext, DataContextType } from '../context/DataContext';

export default function Main() {
  const { id } = useParams();
  const { data } = useContext(DataContext) as DataContextType;
  const [taskForm, setTaskForm] = useState({
    active: false,
    data: {
      title: '',
      description: '',
    },
  });

  const projectData = data.find((project) => project.id === id);

  return (
    <>
      <Modal
        open={taskForm.active}
        onClose={() => setTaskForm((prev) => ({ ...prev, active: false }))}
      >
        <TaskForm
          onClose={() => setTaskForm((prev) => ({ ...prev, active: false }))}
        />
      </Modal>
      <DragContext
        showForm={() => setTaskForm((prev) => ({ ...prev, active: true }))}
      />
    </>
  );
}
