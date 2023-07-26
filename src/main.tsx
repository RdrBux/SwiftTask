import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store.ts';
import { ProjectProvider } from './context/ProjectContext.tsx';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <>
    <Provider store={store}>
      <BrowserRouter>
        <ProjectProvider>
          <App />
        </ProjectProvider>
      </BrowserRouter>
    </Provider>
  </>
);
