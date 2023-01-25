import { Routes, Route} from 'react-router-dom'
import './App.css';
import Layout from './Components/Layout/Layout';
import AdminReservas from './Pages/AdminReservas';
import Home from './Pages/Home';
import Menu from './Pages/Menu';
import Reservas from './Pages/Reservas';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/' element={<Home />}/>
          <Route path='/menu' element={<Menu />}/>
          <Route path='/reservas' element={<Reservas />}/>
          <Route path='/admin/reservas' element={<AdminReservas />}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
