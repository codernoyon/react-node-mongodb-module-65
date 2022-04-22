import { Route, Routes } from 'react-router-dom';
import './App.css';
import UpdateUser from './Components/UpdateUser/UpdateUser';
import AddUser from './Pages/AddUser/AddUser';
import Home from './Pages/Home/Home';
import Header from './Shared/Header/Header';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/user/add' element={<AddUser/>}></Route>
        <Route path='/update/:id' element={<UpdateUser/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
