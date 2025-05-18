import { Outlet } from 'react-router-dom';
import './App.css';
import Navigation from './components/layout/Navigation/Navigation';
import AppRoutes from './routes/AppRoutes';

function App() {

  return (
    <div className='app'>
    <Navigation/>
      <AppRoutes/>
    <Outlet/>
    </div>
  )
}

export default App
