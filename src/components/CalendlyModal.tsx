import React, { useState, useEffect } from 'react';
import { X, Calendar, CheckCircle, Loader2 } from 'lucide-react';
import { InlineWidget } from 'react-calendly';
import { useNavigate } from 'react-router-dom';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

function CalendlyModal({ setCalendlyModalVisibility, user }: { setCalendlyModalVisibility: (visible: boolean) => void , user: (any)}) {
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  const handleClose = async () => {

    console.log("close clicked");

  // ✅ First close modal
  setCalendlyModalVisibility(false);

  // ✅ Then navigate (slight delay ensures modal closes cleanly)
  setTimeout(() => {
    navigate("/");
  }, 100);
  try {
    // Only send email if opened via SignupForm
    if (user?.email) {
      await fetch(`${API_BASE_URL}/sendReminderEmail`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: user.email,
          name: user.fullName,
        }),
      });
      console.log("Reminder email sent!");
    }
  } catch (err) {
    console.error("Failed to send email:", err);
  }

  
};
const params = new URLSearchParams(window.location.search);
const utmSource = params.get("utm_source") || "webpage_visit";

  useEffect(() => {
    // Hide loading after 5 seconds as fallback
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center w-full">
      <div className="relative bg-white max-w-5xl w-full max-h-[90vh] overflow-hidden rounded-xl shadow-2xl flex flex-col lg:flex-row">
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 sm:top-6 sm:right-6 text-gray-400 hover:text-gray-600 transition-colors z-20 bg-white/90 rounded-full p-2 shadow-lg"
        >
          <X className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        {/* Mobile Layout */}
        <div className="block lg:hidden h-full w-full">
          {/* Header */}
          <div className="bg-gradient-to-br from-orange-500 to-red-600 p-4 text-white">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-white/20 rounded-lg">
                <Calendar className="w-5 h-5 text-white" />
              </div>
              <div>
                <h2 className="text-lg font-bold">Schedule Your Flashfire Consultation</h2>
                <p className="text-orange-100 text-sm">30 Minutes • Free</p>
              </div>
            </div>
          </div>

          {/* Calendar - Full Height */}
          <div className="bg-white relative" style={{ height: 'calc(100vh - 100px)' }}>
            {isLoading && (
              <div className="absolute inset-0 bg-white flex items-center justify-center z-10">
                <div className="text-center">
                  <h3 className="text-lg font-medium text-gray-700 mb-6">Find Your Perfect Timing</h3>
                  <div className="w-12 h-12 border-4 border-orange-500 border-t-transparent rounded-full animate-spin mx-auto"></div>
                </div>
              </div>
            )}
            <InlineWidget
              url = {`https://calendly.com/biswajitclean/30min?utm_source=${utmSource}`}
              // url=  "https://calendly.com/feedback-flashfire/30min"
              prefill={{
    name: user?.fullName || "",
    email: user?.email || "",
    customAnswers: {
      a3: user?.countryCode + user?.phone || "", // phone is the 3rd question
    },
  }}
              styles={{
                height: '100%',
                width: '100%',
                minHeight: '400px',
              }}
              pageSettings={{
                backgroundColor: 'ffffff',
                hideEventTypeDetails: false,
                hideLandingPageDetails: false,
                primaryColor: 'f97316',
                textColor: '374151',
              }}
            />
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:flex w-full h-[90vh]">
          {/* Orange Section (Info) */}
          <div className="w-2/5 bg-gradient-to-br from-orange-500 to-red-600 p-8 text-white overflow-y-hidden rounded-l-xl">
            <div className="mb-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-3 bg-white/20 rounded-xl">
                  <Calendar className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold">Schedule Your Flashfire Consultation</h2>
                  <p className="text-orange-100">30 Minutes • Free</p>
                </div>
              </div>
              <p className="text-orange-100 text-lg leading-relaxed">
                Book your personalized consultation to learn how Flashfire can automate your job search and land interviews faster.
              </p>
            </div>

            <div className="space-y-4 mb-6">
              <h3 className="text-xl font-bold mb-4">What You'll Get:</h3>

              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-300 mt-0.5" />
                <div>
                  <h4 className="font-semibold">Personalized Strategy</h4>
                  <p className="text-orange-100 text-sm">Custom job search plan tailored to your goals</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-300 mt-0.5" />
                <div>
                  <h4 className="font-semibold">Resume Review</h4>
                  <p className="text-orange-100 text-sm">Expert feedback on your current resume</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-300 mt-0.5" />
                <div>
                  <h4 className="font-semibold">AI Demo</h4>
                  <p className="text-orange-100 text-sm">See our automation technology in action</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-300 mt-0.5" />
                <div>
                  <h4 className="font-semibold">Q&A Session</h4>
                  <p className="text-orange-100 text-sm">Get all your questions answered by experts</p>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-white/20">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold">95%</div>
                  <div className="text-orange-100 text-xs">Success Rate</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">100+</div>
                  <div className="text-orange-100 text-xs">Jobs Landed</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">220+</div>
                  <div className="text-orange-100 text-xs">Hours Saved</div>
                </div>
              </div>
            </div>
          </div>

          {/* Calendar Section */}
          <div className="w-3/5 bg-white overflow-hidden rounded-r-xl relative">
            {isLoading && (
              <div className="absolute inset-0 bg-white flex items-center justify-center z-10">
                <div className="text-center">
                  <div className="w-12 h-12 border-4 border-orange-500 border-t-transparent rounded-full animate-spin mx-auto mb-6"></div>
                  <h3 className="text-xl font-medium text-gray-700">Finding best slots for you...</h3>
                </div>
              </div>
            )}
            <InlineWidget
              url="https://calendly.com/biswajitclean/30min"
              // url="https://calendly.com/feedback-flashfire/30min"
              prefill={{
    name: user?.fullName || "",
    email: user?.email || "",
    customAnswers: {
      a3: user?.phone || "", // phone is the 3rd question
    },
  }}
              styles={{
                height: '100%',
                width: '100%',
                minHeight: '100%',
              }}
              pageSettings={{
                backgroundColor: 'ffffff',
                hideEventTypeDetails: false,
                hideLandingPageDetails: false,
                primaryColor: 'f97316',
                textColor: '374151',
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CalendlyModal;

