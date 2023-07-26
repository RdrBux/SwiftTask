import { useState } from 'react';
import Home from './components/Home';
import Main from './components/Main';
import Modal from './components/Modal';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import { Routes, Route } from 'react-router-dom';
import NewProjectForm from './components/NewProjectForm';

function App() {
  const [showCreateProject, setShowCreateProject] = useState(false);

  return (
    <div className="min-h-screen flex flex-col text-zinc-900">
      <Modal
        open={showCreateProject}
        onClose={() => setShowCreateProject(false)}
      >
        <NewProjectForm onClose={() => setShowCreateProject(false)} />
      </Modal>
      <Topbar />
      <div className="flex grow h-full">
        <Sidebar showModal={setShowCreateProject} />
        {
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:id" element={<Main />} />
          </Routes>
        }
      </div>
    </div>
  );
}

export default App;
