import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { GTagUTM } from '../utils/GTagUTM.js';

const Hero = ({ setSignupFormVisibility }) => {
  const [isSuccessMatrixVisible, setIsSuccessMatrixVisible] = useState(false);
  const successMatrixRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsSuccessMatrixVisible(true);
      },
      { threshold: 0.05, rootMargin: '100px 0px' }
    );
    if (successMatrixRef.current) observer.observe(successMatrixRef.current);
    return () => {
      if (successMatrixRef.current) observer.unobserve(successMatrixRef.current);
    };
  }, []);

  return (
    <>
      {/* Main Hero Section - 100vh */}
      <section
        id="home"
        className="relative pb-4 h-screen bg-gradient-to-br from-orange-50 via-white to-red-50 overflow-hidden"
      >
        {/* Background Effects (make click-through) */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-orange-200/30 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-red-200/30 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-orange-100/40 to-red-100/40 rounded-full blur-3xl pointer-events-none" />
        </div>

        {/* Main Content - Centered (lift above background) */}
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-orange-100 border border-orange-200 rounded-full px-3 sm:px-4 py-2 mb-6 sm:mb-8 lg:mb-20">
              <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-orange-600" />
              <span className="text-orange-800 text-xs sm:text-sm font-medium">
                Save 150+ Hours Every Month
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="relative -top-[18px] text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl font-bold text-black leading-snug mb-6 sm:mb-8 px-2 text-center">
              <span className="block">Land 15+ Interview Calls with Us</span>
              <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                Powered by Flashfire AI.
              </span>
            </h1>

            {/* Subtext */}
            <p className="text-lg sm:text-xl md:text-2xl lg:text-2xl text-[#333333] tracking-tight mb-12 sm:mb-12 max-w-[1100px] mx-auto leading-snug px-4 text-center lg:mb-14">
              We apply to 
              <span className="text-orange-600 font-bold"> 1000+ USA Jobs</span> and track everything — so you can focus on interviews.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4">
              <button
                type="button"
                onClick={() => {
                  // Open the form first
                  setSignupFormVisibility(true);
                  // Track safely
                  try {
                    GTagUTM({
                      eventName: 'sign_up_click',
                      label: 'Hero_Start_Free_Trial_Button',
                      utmParams: {
                        utm_source: 'WEBSITE',
                        utm_medium: 'Website_Front_Page',
                        utm_campaign: 'Website',
                      },
                    });
                  } catch {}
                }}
                className="group bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 flex items-center space-x-2 w-full sm:w-auto justify-center"
              >
                <span>Start My 7-Day Free Trial</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              {/* <a
                href="#how-it-works"
                className="scroll-smooth border-2 border-gray-300 text-gray-700 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:bg-gray-50 hover:border-gray-400 transition-all duration-300 w-full sm:w-auto text-center"
              >
                See How It Works
              </a> */}
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 h-fit transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </section>

      {/* Success Matrix Section - unchanged */}
      <section className="relative bg-gradient-to-br from-orange-50 via-white to-red-50 py-16 sm:py-20 lg:py-24">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-orange-200/20 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-red-200/20 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            ref={successMatrixRef}
            className={`max-w-7xl mx-auto text-center transition-all duration-800 ease-out opacity-100 transform translate-y-0 lg:opacity-0 lg:transform lg:translate-y-8 ${
              isSuccessMatrixVisible ? 'lg:opacity-100 lg:transform lg:translate-y-0' : ''
            }`}
          >
            <h2
              className={`text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6 lg:mb-8 leading-tight transition-all duration-800 delay-100 opacity-100 transform translate-y-0 lg:opacity-0 lg:transform lg:translate-y-4 ${
                isSuccessMatrixVisible ? 'lg:opacity-100 lg:transform lg:translate-y-0' : ''
              }`}
            >
              <span className="block">Our Platform Gets Users Interview Calls Within Weeks —</span>
              <span className="block">And Offers In Months</span>
            </h2>

            <p
              className={`text-lg sm:text-xl md:text-xl lg:text-xl text-gray-600 mb-8 sm:mb-12 lg:mb-16 transition-all duration-800 delay-150 opacity-100 transform translate-y-0 lg:opacity-0 lg:transform lg:translate-y-4 ${
                isSuccessMatrixVisible ? 'lg:opacity-100 lg:transform lg:translate-y-0' : ''
              }`}
            >
              Powered by AI-driven job targeting and recruiter outreach automation.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 xl:gap-20 mb-8 sm:mb-12">
              {[
                { percentage: '95%', title: 'Clients get calls', subtitle: 'within a month', delay: 'delay-200' },
                { percentage: '90%', title: 'Clients land job', subtitle: 'within 3 months', delay: 'delay-300' },
              ].map((stat, index) => (
                <div
                  key={index}
                  className={`text-center group cursor-pointer relative p-4 sm:p-6 lg:p-8 transition-all duration-800 ${stat.delay} opacity-100 transform translate-y-0 lg:opacity-0 lg:transform lg:translate-y-6 flex flex-col items-center justify-center ${
                    isSuccessMatrixVisible ? 'lg:opacity-100 lg:transform lg:translate-y-0' : ''
                  }`}
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 xl:w-80 xl:h-80 bg-gradient-to-br from-orange-100 via-orange-50 to-red-100 rounded-full scale-0 group-hover:scale-100 transition-all duration-500 ease-out opacity-0 group-hover:opacity-100" />
                  </div>

                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-52 h-52 sm:w-60 sm:h-60 md:w-68 md:h-68 lg:w-76 lg:h-76 xl:w-84 xl:h-84 border-2 border-orange-200 rounded-full scale-0 group-hover:scale-100 transition-all duration-700 ease-out opacity-0 group-hover:opacity-60" />
                  </div>

                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-44 h-44 sm:w-52 sm:h-52 md:w-60 md:h-60 lg:w-68 lg:h-68 xl:w-76 xl:h-76 bg-gradient-to-r from-orange-200/30 to-red-200/30 rounded-full scale-0 group-hover:scale-100 transition-all duration-600 ease-out opacity-0 group-hover:opacity-70 blur-md" />
                  </div>

                  <div className="relative z-10 flex flex-col items-center transition-all duration-300 group-hover:scale-105">
                    <div className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-bold text-orange-600 mb-2 sm:mb-3 lg:mb-4 group-hover:text-orange-700 transition-colors duration-300">
                      {stat.percentage}
                    </div>
                    <div className="h-1 w-16 sm:w-20 lg:w-24 bg-orange-600 mx-auto mb-4 sm:mb-5 lg:mb-6 transition-all duration-300 group-hover:bg-orange-700 group-hover:w-20 sm:group-hover:w-24 lg:group-hover:w-28" />
                    <div className="text-lg sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl font-semibold text-gray-900 mb-2 sm:mb-3 text-center leading-tight group-hover:text-gray-800 transition-colors duration-300">
                      {stat.title}
                    </div>
                    <div className="text-base sm:text-lg md:text-xl lg:text-xl xl:text-2xl text-orange-600 font-medium text-center group-hover:text-orange-700 transition-colors duration-300">
                      {stat.subtitle}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <p
              className={`text-sm sm:text-base md:text-lg text-gray-500 italic transition-all duration-800 delay-400 opacity-100 transform translate-y-0 lg:opacity-0 lg:transform lg:translate-y-4 ${
                isSuccessMatrixVisible ? 'lg:opacity-100 lg:transform lg:translate-y-0' : ''
              }`}
            >
              *Based on verified user data from 2024-25 cohort
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
