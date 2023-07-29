import { useState } from 'react';
import Home from './components/Home';
import Main from './components/Main';
import Modal from './components/Modal';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import { Routes, Route } from 'react-router-dom';
import NewProjectForm from './components/NewProjectForm';
import { TaskProvider } from './context/TaskContext';

function App() {
  const [showCreateProject, setShowCreateProject] = useState(false);
  const [menuActive, setMenuActive] = useState(
    window.innerWidth < 1024 ? false : true
  );

  return (
    <div className="min-h-screen flex flex-col text-zinc-900">
      <Modal
        open={showCreateProject}
        onClose={() => setShowCreateProject(false)}
      >
        <NewProjectForm onClose={() => setShowCreateProject(false)} />
      </Modal>
      <Topbar menuActive={menuActive} setMenuActive={setMenuActive} />
      <div className="flex relative grow h-full">
        <Sidebar
          showModal={setShowCreateProject}
          menuActive={menuActive}
          setMenuActive={setMenuActive}
        />
        {
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/:id"
              element={
                <TaskProvider>
                  <Main />
                </TaskProvider>
              }
            />
          </Routes>
        }
      </div>
    </div>
  );
}

export default App;
