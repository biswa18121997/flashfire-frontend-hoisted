import React, { useEffect, useState } from 'react'
import Navigation from './Navigation';
import Hero from './Hero';
import Features from './Features';
import HowItWorks from './HowItWorks';
import Testimonials from './Testimonials';
import Pricing from './Pricing';
import FAQ from './FAQ';
import Contact from './Contact';
// import SignupModal from './SignupModal';
import RealTimeMetrics from './RealTimeMetrics';
import MovingJobs from './MovingJobs';
import WhatsAppButton from './WhatsAppButton';
import Footer from './Footer';
import Blog from './Blog';
import SignupForm from './SignupForm.tsx';
import CalendlyModal from './CalendlyModal.tsx';
import { useOutletContext } from 'react-router-dom';
import SalesPopup from './SalesPopUp.tsx';
import EmployerForm from './EmployerForm.tsx';

function Home() {
  const { signupFormVisibility,calendlyModalVisibility,setSignupFormVisibility, setCalendlyModalVisibility, employerFormVisibility, setEmployerFormVisibility } = useOutletContext<{
    setSignupFormVisibility: React.Dispatch<React.SetStateAction<boolean>>,
    setCalendlyModalVisibility: React.Dispatch<React.SetStateAction<boolean>>,
    setEmployerFormVisibility: React.Dispatch<React.SetStateAction<boolean>>,
    signupFormVisibility: boolean,
    calendlyModalVisibility: boolean,
    employerFormVisibility: boolean
  }>();
  // const [signupFormVisibility, setSignupFormVisibility] = useState(false);
  //   const [calendlyModalVisibility, setCalendlyModalVisibility] = useState(false);
  
  // (window as any).openSignupModal = (customStep = 1) => {
  //   const modal = document.getElementById('signup-modal');
  //     if (modal) {
  //     modal.classList.remove('hidden');
  //     setStep(customStep);
  //   }
  // };
  useEffect(() => {
    setTimeout(()=>
    setSignupFormVisibility(true),10000);
  }, []);
  return (
    <div>
            <Navigation setCalendlyModalVisibility={setCalendlyModalVisibility} setSignupFormVisibility={setSignupFormVisibility} setEmployerFormVisibility={setEmployerFormVisibility}/>
            <Hero setCalendlyModalVisibility={setCalendlyModalVisibility} setSignupFormVisibility={setSignupFormVisibility}/>
            <MovingJobs setSignupFormVisibility={setSignupFormVisibility}/>
            <RealTimeMetrics setSignupFormVisibility={setSignupFormVisibility}/>
            <Features setSignupFormVisibility={setSignupFormVisibility}/>
            <Blog />
            <HowItWorks setSignupFormVisibility={setSignupFormVisibility}/>
            <Testimonials />
            <Pricing />
            <FAQ setSignupFormVisibility={setSignupFormVisibility}/>
            <Contact setSignupFormVisibility={setSignupFormVisibility}/>
            {employerFormVisibility &&  <EmployerForm employerFormVisibility={employerFormVisibility} setEmployerFormVisibility={setEmployerFormVisibility} />}

            {signupFormVisibility && <SignupForm setSignupFormVisibility={setSignupFormVisibility} setCalendlyModalVisibility={setCalendlyModalVisibility} />}
            {calendlyModalVisibility && <CalendlyModal setCalendlyModalVisibility={setCalendlyModalVisibility}/>}
            <WhatsAppButton />
            <SalesPopup />
            <Footer />
            {/* <AutoModalTrigger /> */}

    </div>
  )
}

export default Home
