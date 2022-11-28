import logo from './logo.svg';
import './App.css';
import LogIn from './pages/LogIn';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import { AuthProvider } from './routes/Auth';
import { ProtectedRoutes } from './routes/ProtectedRoutes';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <div className="App">
          <Routes>
            <Route path='/' element={<LogIn />} />
            <Route path='/dashboard' element={<ProtectedRoutes><Dashboard /></ProtectedRoutes>} />
          </Routes>
        </div>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
