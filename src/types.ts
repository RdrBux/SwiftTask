export type Task = {
  id: string;
  title: string;
  description?: string;
};

export type Tasks = {
  [id: string]: Task;
};

export type TaskList = {
  id: string;
  title: 'Por hacer' | 'En proceso' | 'Realizadas';
  tasks: Task['id'][];
};

export type Project = {
  id: string;
  title: string;
  description?: string;
  tasks: Tasks;
  taskLists: TaskList[];
};

export type Data = Project[];
