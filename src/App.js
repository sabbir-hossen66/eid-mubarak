
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Eid from './Pages/Eid/Eid';
import Home from './Pages/Home';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/eid' element={<Eid></Eid>}></Route>
      </Routes>
    </div>
  );
}

export default App;
