import logo from './logo.svg';
import './App.css';
import HomePage from './pages/HomePage/HomePage';
import AboutPage from './pages/AboutPage/AboutPage';
import WorkPage from './pages/WorkPage/WorkPage';
import GlobalNavbar from './components/GlobalNavbar/GlobalNavbar';
import BlogPage from './pages/BlogPage/BlogPage';
import ContactPage from './pages/ContactPage/ContactPage';
import { Routes, Route } from "react-router-dom";
import LoadingPage from './pages/LoadingPage/LoadingPage';

function App() {
     const setBodyColor = () => {
          document.body.style.backgroundColor = "#000D27";
     }
     return (
          <>
               <GlobalNavbar/>
               <Routes>
                    <Route path="/" element={<HomePage />} onLeave={setBodyColor()} onEnter={setBodyColor()}/>
                    <Route path="about" element={<AboutPage />} onLeave={setBodyColor()} onEnter={setBodyColor()}/>
                    <Route path="home" element={<HomePage />} onLeave={setBodyColor()} onEnter={setBodyColor()}/>
                    <Route path="work" element={<WorkPage />} onLeave={setBodyColor()} onEnter={setBodyColor()}/>
                    <Route path="blog" element={<BlogPage />} onLeave={setBodyColor()} onEnter={setBodyColor()}/>
                    <Route path="contact" element={<ContactPage />} onLeave={setBodyColor()} onEnter={setBodyColor()}/>
                    <Route path="loading" element={<LoadingPage />} onLeave={setBodyColor()} onEnter={setBodyColor()}/>
               </Routes>
          </>
     );
}

export default App;
