import { Route, Routes } from 'react-router-dom';
import Home from './component/Home';
import About from './component/About';
import Login from './component/Login';
import Nav from './component/Nav';
import Footer from './component/Footer';
import Cinematography from './component/Data/Cinematography';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css'
import Assistant from './component/Assistant';
import Signup from './component/Signup';
import MovieMaking from './component/Data/Moviemaking';
import Screenplay from './component/Data/Screenplay';
function App() {
  return (
    <div>
      <Nav/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signin" element={<Signup />} />
      <Route path="/about" element={<About />} />
      <Route path="/assistant" element={<Assistant />} />
      <Route path="/cine" element={<Cinematography />} />
      <Route path="/movie" element={<MovieMaking />} />
      <Route path="/screen" element={<Screenplay/>} />
    </Routes>
    <Footer/>
  </div>
  );
}

export default App;