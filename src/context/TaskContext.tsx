import { createContext, useState } from 'react';
import { Task } from '../types';

interface TaskDataType {
  active: boolean;
  data: {
    title: string;
    description: string;
    id?: string;
  };
}

export interface TaskContextType {
  taskData: TaskDataType;
  showEmptyData: () => void;
  showData: (task: Task) => void;
  clearData: () => void;
}

export const TaskContext = createContext<TaskContextType>({
  taskData: {
    active: false,
    data: {
      title: '',
      description: '',
    },
  },
  showEmptyData: () => null,
  showData: () => null,
  clearData: () => null,
});

type Props = {
  children: React.ReactNode;
};

export const TaskProvider = ({ children }: Props) => {
  const [taskData, setTaskData] = useState<TaskDataType>({
    active: false,
    data: {
      title: '',
      description: '',
    },
  });

  function showEmptyData() {
    setTaskData({
      active: true,
      data: {
        title: '',
        description: '',
      },
    });
  }

  function showData(task: Task) {
    setTaskData({
      active: true,
      data: {
        title: task.title,
        description: task.description ?? '',
        id: task.id,
      },
    });
  }

  function clearData() {
    setTaskData({
      active: false,
      data: {
        title: '',
        description: '',
      },
    });
  }

  return (
    <TaskContext.Provider
      value={{ taskData, showEmptyData, showData, clearData }}
    >
      {children}
    </TaskContext.Provider>
  );
};
