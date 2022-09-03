import { Route, Routes } from 'react-router-dom';
import './App.css';
import Biography from './components/Biography/Biography';
import Header from './components/Header/Header';
import Users from './components/Users/Users';
import Questions from './components/Questions/Questions';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path='/' element={<Biography />} />
          <Route path='/users' element={<Users />} />
          <Route path='/questions' element={<Questions />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
