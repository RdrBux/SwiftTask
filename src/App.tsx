import Home from './components/Home';
import Main from './components/Main';
import Modal from './components/Modal';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="min-h-screen flex flex-col text-zinc-900">
      <Modal />
      <Topbar />
      <div className="flex grow w-full h-full">
        <Sidebar />
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
