import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar';
import Footer from './Components/Footer/footer';
import Home from './Components/Home/Home';
import Schedule from './Components/Schedule/Schedule';
import Sign_in from './Components/Sign/Sign_in';
import Sign_up from './Components/Sign/Sign_up';
import Admin from './Components/Admin/Admin';
import MemberDashboard from './Components/Admin/admin.member';
import Facility from './Components/Facilities/Facility';

function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

function Layout() {
  const location = useLocation();
  const showHeaderAndFooter = !(location.pathname.startsWith('/admin') || location.pathname.startsWith('/memberdash'))

  return (
    <>
      {showHeaderAndFooter && <NavBar />}
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path="/facility" element={<Facility />} />
        <Route exact path='/schedule' element={<Schedule />} />
        <Route exact path='/signin' element={<Sign_in />} />
        <Route exact path='/signup' element={<Sign_up />} />
        <Route path='/admin/*' element={<Admin />} />
        <Route path='/memberdash' element={<MemberDashboard />} />
      </Routes>
      {showHeaderAndFooter && <Footer />}
    </>
  );
}


export default App;
