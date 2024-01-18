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



import { createClient } from '@supabase/supabase-js'
import { useEffect } from 'react';

// Create a single supabase client for interacting with your database
function App() {
  const supabase = createClient('https://fahzqedwetbaoiuoibfl.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZhaHpxZWR3ZXRiYW9pdW9pYmZsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDU1NjI5NzcsImV4cCI6MjAyMTEzODk3N30.qCJYeT_T6hF-BHaCGaa0CAdPJq8nhrkpLoBEdsX4kWM')
  useEffect(()=>{
    supabase.from('user').insert({
      email:"yash@gmail.com",
      password:"1234"
    })
  }, [])
  return (
    <div>
      <Nav/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login supabase={supabase}/>} />
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