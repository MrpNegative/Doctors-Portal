import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Pages/Authintication/Login/Login';
import SignUp from './Pages/Authintication/SignUp/SignUp';
import About from './Pages/Genarel/About/About';
import Appointment from './Pages/Genarel/Appointment/Appointment';
import ContactUs from './Pages/Genarel/ContactUs/ContactUs';
import Home from './Pages/Genarel/Home/Home';
import Reviews from './Pages/Genarel/Reviews/Reviews';
import Nav from './Pages/Shared/Nav/Nav';

function App() {
  return (
    <div className="App">
     <Nav/>
     <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/appointment" element={<Appointment/>} />
        <Route path="/review" element={<Reviews/>} />
        <Route path="/contact" element={<ContactUs/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<SignUp/>} />
        
      </Routes>
    </div>
  );
}

export default App;
