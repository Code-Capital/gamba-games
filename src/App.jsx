import 'bootstrap/dist/css/bootstrap.css';
import './css/global.scss';
import { BrowserRouter } from 'react-router-dom';
import { ProtectedRoutes } from './routes/ProtectedRoutes';

export default function App() {
  return (
    <BrowserRouter>
      <ProtectedRoutes />
    </BrowserRouter>
  );
}
