import { useState } from 'react';
import DragContext from './DragContext';
import Modal from './Modal';
import TaskForm from './TaskForm';

export default function Main() {
  const [taskForm, setTaskForm] = useState({
    active: false,
    data: {
      title: '',
      description: '',
    },
  });

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
