import { Route, Routes } from 'react-router-dom';
import './App.css';
import AboutMe from './Pages/Home/AboutMe';
import Home from './Pages/Home/Home';
import Projects from './Pages/Home/Projects';
import Resume from './Pages/Resume';
import Footer from './Pages/Shared/Footer';
import Header from './Pages/Shared/Header';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/aboutme' element={<AboutMe></AboutMe>}></Route>
        <Route path='/projects' element={<Projects></Projects>}></Route>
        <Route path='/resume' element={<Resume></Resume>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
