export type Task = {
  title: string;
  id: string;
  description?: string;
};

export type TaskSection = {
  id: string;
  title: 'Por hacer' | 'En proceso' | 'Realizadas';
  taskList: Task[];
};

export type Project = {
  id: string;
  title: string;
  tasks: TaskSection[];
};

export type Data = Project[];
