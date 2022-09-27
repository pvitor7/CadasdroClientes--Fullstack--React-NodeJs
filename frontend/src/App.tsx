import './App.css';
import { Route, Routes } from "react-router-dom"

import RegisterEmployee from './components/RegisterEmployee';
import Header from './components/Header';
import Login from './components/Login';
import RegisterClient from './components/RegisterClient';
import ListEmployee from './components/ListEmployees';
import ListClients from './components/ListClients';


function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path='' element={<Login />} />
        <Route path='/clients' element={<ListClients />} />
        <Route path='/employees' element={<ListEmployee />} />
        <Route path='/employee/register' element={<RegisterEmployee />} />
        <Route path='/register' element={<RegisterClient />} />
      </Routes>
    </div>
  );
}

export default App;
