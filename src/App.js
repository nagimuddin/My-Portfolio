import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blog from './Pages/Blog'
import AboutMe from './Pages/Home/AboutMe';
import Home from './Pages/Home/Home';
import Projects from './Pages/Home/Projects';
import Footer from './Pages/Shared/Footer';
import Header from './Pages/Shared/Header';
import ProjectDetails1 from './Pages/Shared/ProjectDitails1';
import ProjectsDetails2 from './Pages/Shared/ProjectsDetails2';
import ProjectsDetails3 from './Pages/Shared/ProjectsDetails3';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/aboutme' element={<AboutMe></AboutMe>}></Route>
        <Route path='/projects' element={<Projects></Projects>}></Route>
        <Route path='/project-details1' element={<ProjectDetails1></ProjectDetails1>}></Route>
        <Route path='/project-details2' element={<ProjectsDetails2></ProjectsDetails2>}></Route>
        <Route path='/project-details3' element={<ProjectsDetails3></ProjectsDetails3>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
