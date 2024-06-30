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
     return (
          <>
               <GlobalNavbar/>
               <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="about" element={<AboutPage />} />
                    <Route path="home" element={<HomePage />} />
                    <Route path="work" element={<WorkPage />} />
                    <Route path="blog" element={<BlogPage />} />
                    <Route path="contact" element={<ContactPage />} />
                    <Route path="loading" element={<LoadingPage />} />
               </Routes>
          </>
     );
}

export default App;
