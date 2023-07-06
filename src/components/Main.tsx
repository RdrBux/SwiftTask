import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { DataContext, DataContextType } from '../context/DataContext';
import TaskSection from './TaskSection';

export default function Main() {
  const { id } = useParams();
  const { data } = useContext(DataContext) as DataContextType;

  const projectData = data.find((project) => project.id === id);

  if (!projectData) return;
  const content = projectData.tasks.map(({ id, taskList, title }) => (
    <TaskSection key={id} id={id} taskList={taskList} title={title} />
  ));

  return (
    <main className="p-8 flex overflow-scroll gap-8 w-full">{content}</main>
  );
}
