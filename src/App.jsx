
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/topBar/Header';
import Home from './components/home/Home'
import Edit from './components/edit/Edit';


function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/edit" element={<Edit/>}/>
      </Routes>
    </div>
  );
}

export default App;
