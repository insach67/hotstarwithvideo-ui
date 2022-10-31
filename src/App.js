
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Slides from "./components/Slides"
import NotFound from "./components/NotFound"
import {  Route, Routes } from 'react-router-dom';
import Videoplayer from "./components/videoplayer"
import Verticalcard from './components/moviescard/Verticalcard';


function App() {
  return (
    <>
     
       <Navbar/>
       <Routes>
       <Route index path="/" element={<Slides />} />
       <Route path="/movie/:name/:Id" element={<Videoplayer />} />
        <Route path="*" element={<NotFound />} />

       </Routes>
       <Verticalcard/>
       <Footer/>
     
       
    </>
  );
}

export default App;
