import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';

import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Home from './pages/Home/Home';
import Services from './pages/Service/Services';
import Testimonial from './pages/Testimonial/Testimonial';
import Navbar from './Components/Navbar/Navbar';

const App = () => {
  return (
    <Router>
      <Navbar />
      <main>
        <Routes>
          <Route exact path='/about' element={<About />} />
          <Route exact path='/contact' element={<Contact />} />
          <Route exact path='/home' element={<Home />} />
          <Route exact path='/services' element={<Services />} />
          <Route exact path='/testiomonial' element={<Testimonial />} />
          <Route path='/' element={<Navigate replace to='/home' />} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;
