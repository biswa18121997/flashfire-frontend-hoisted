import React, {useState} from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import SignupModal from './components/SignupModal';
import RealTimeMetrics from './components/RealTimeMetrics';
import MovingJobs from './components/MovingJobs';
import WhatsAppButton from './components/WhatsAppButton';
import Footer from './components/Footer';
import { Outlet } from 'react-router-dom';
// import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import SignupForm from './components/SignupForm';
import CalendlyModal from './components/CalendlyModal.tsx';

function App() {
  const [signupFormVisibility, setSignupFormVisibility] = useState(false);
  const [calendlyModalVisibility, setCalendlyModalVisibility] = useState(false);
  const [employerFormVisibility, setEmployerFormVisibility] = useState(false);
  return (
    <div className="min-h-screen bg-white">
      {/* <Navigation setSignupFormVisibility={setSignupFormVisibility} setCalendlyModalVisibility={setCalendlyModalVisibility} /> */}
      {/* <Hero setSignupFormVisibility={setSignupFormVisibility} setCalendlyModalVisibility={setCalendlyModalVisibility} /> */}
      {/* <MovingJobs setSignupFormVisibility={setSignupFormVisibility} /> */}
      {/* <RealTimeMetrics setSignupFormVisibility={setSignupFormVisibility} /> */}
      {/* <Features setSignupFormVisibility={setSignupFormVisibility} /> */}
      {/* <HowItWorks setSignupFormVisibility={setSignupFormVisibility} /> */}
      {/* <Testimonials setSignupFormVisibility={setSignupFormVisibility} /> */}
      {/* <Pricing  setSignupFormVisibility={setSignupFormVisibility} /> */}
      {/* <FAQ setSignupFormVisibility={setSignupFormVisibility} /> */}
      {/* <Contact setSignupFormVisibility={setSignupFormVisibility} /> */}
      {/* <Outlet context={{ setSignupFormVisibility, setCalendlyModalVisibility }} /> */}
      {/* {signupFormVisibility && <SignupForm setSignupFormVisibility={setSignupFormVisibility} />} */}
      {/* {calendlyModalVisibility && <CalendlyModal setCalendlyModalVisibility={setCalendlyModalVisibility} />} */}
      {/* <Footer /> */}
      <Outlet context={{signupFormVisibility,calendlyModalVisibility, setSignupFormVisibility, setCalendlyModalVisibility ,employerFormVisibility,setEmployerFormVisibility}} />
    </div>
  );
}

export default App;