import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Login from './Pages/Login';
import Nav from './Pages/component/Nav';
import Footer from './Pages/component/Footer';
import Cinematography from './Pages/Cinematography';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css'
import Assistant from './Pages/Assistant';
import Signup from './Pages/Signup';
import MovieMaking from './Pages/Moviemaking';
import Screenplay from './Pages/Screenplay';
import { createClient } from '@supabase/supabase-js'
import { useEffect,useState } from 'react';
function App() {
  const supabase = createClient('https://fahzqedwetbaoiuoibfl.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZhaHpxZWR3ZXRiYW9pdW9pYmZsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDU1NjI5NzcsImV4cCI6MjAyMTEzODk3N30.qCJYeT_T6hF-BHaCGaa0CAdPJq8nhrkpLoBEdsX4kWM')
  // useEffect(()=>{
  //   supabase.from('user').insert({
  //     email:"yash@gmail.com",
  //     password:"1234"
  //   })
  // }, [])
  const [email, setEmail] = useState("")
  const [pass, setPass] = useState("")
  const [login, setLogin] = useState(false)
  return (
    <div>
      <Nav/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login supabase={supabase} email={email} setEmail={setEmail} pass={pass} setPass={setPass} login={login} setLogin={setLogin}/>} />
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