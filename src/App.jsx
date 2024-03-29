import 'bootstrap/dist/css/bootstrap.css';
import './css/global.scss';
import { BrowserRouter } from 'react-router-dom';
import { ProtectedRoutes } from './routes/ProtectedRoutes';
import { AppProvider } from './context';

export default function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <ProtectedRoutes />
      </BrowserRouter>
    </AppProvider>
  );
}
