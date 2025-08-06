// import React from 'react';
// import { Check, Zap, Crown, Rocket } from 'lucide-react';

// const Pricing = () => {
//   const openModal = () => {
//     const modal = document.getElementById('signup-modal');
//     if (modal) modal.classList.remove('hidden');
//   };

//   const plans = [
//     {
//       name: "Ignite",
//       icon: <Zap className="w-6 h-6" />,
//       applications: "250",
//       price: "$199",
//       originalPrice: "$299",
//       popular: false,
//       description: "Perfect for entry-level professionals",
//       features: [
//         "AI-powered job matching",
//         "250 tailored applications",
//         "Resume optimization",
//         "Basic analytics dashboard",
//         "Email support",
//       ],
//       cta: "Start Free Trial"
//     },
//     {
//       name: "Professional",
//       icon: <Crown className="w-6 h-6" />,
//       applications: "500",
//       price: "$349",
//       originalPrice: "$449",
//       popular: true,
//       description: "Most popular for mid-level professionals",
//       features: [
//         "Everything in Ignite",
//         "500 tailored applications",
//         "Priority job matching",
//         "Advanced analytics & insights",
//         "LinkedIn profile optimization",
//         "Priority support",
//         "Interview preparation tips",
//       ],
//       cta: "Start Free Trial"
//     },
//     {
//       name: "Executive",
//       icon: <Rocket className="w-6 h-6" />,
//       applications: "1000",
//       price: "$599",
//       originalPrice: "$699",
//       popular: false,
//       badge: "Best Value",
//       description: "For senior professionals & executives",
//       features: [
//         "Everything in Professional",
//         "1000 tailored applications",
//         "Executive-level job targeting",
//         "Personal career consultant",
//         "Salary negotiation support",
//         "Custom cover letters",
//         "Network introduction requests",
//       ],
//       cta: "Start Free Trial"
//     }
//   ];

//   return (
//     <section id="pricing" className="py-16 sm:py-24 bg-gradient-to-b from-white to-gray-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-12 sm:mb-20">
//           <div className="inline-flex items-center space-x-2 bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
//             <Zap className="w-4 h-4" />
//             <span>Limited Time Offer</span>
//           </div>
//           <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
//             Choose Your Career Acceleration Plan
//           </h2>
//           <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-6 sm:mb-8">
//             All plans include our AI-powered job matching and application automation. 
//             <span className="text-orange-600 font-semibold"> Save 150+ hours monthly</span> while we work for you 24/7.
//           </p>
          
//           {/* Discount Banner */}
//           <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-2xl p-4 sm:p-6 max-w-2xl mx-auto mb-8 sm:mb-12">
//             <h3 className="text-xl sm:text-2xl font-bold mb-2">🔥 Early Bird Special - 20% OFF</h3>
//             <p className="text-orange-100">Limited time offer. No code needed!</p>
//           </div>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
//           {plans.map((plan, index) => (
//             <div
//               key={index}
//               className={`relative bg-white rounded-2xl sm:rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 border-2 ${
//                 plan.popular 
//                   ? 'border-orange-500 scale-100 lg:scale-105 ring-4 ring-orange-500/20' 
//                   : 'border-gray-200 hover:border-orange-300'
//               }`}
//             >
//               {plan.popular && (
//                 <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
//                   <span className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 sm:px-6 py-2 rounded-full text-sm font-bold shadow-lg">
//                     🏆 Most Popular
//                   </span>
//                 </div>
//               )}

//               {plan.badge && !plan.popular && (
//                 <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
//                   <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 sm:px-6 py-2 rounded-full text-sm font-bold shadow-lg">
//                     💎 {plan.badge}
//                   </span>
//                 </div>
//               )}

//               <div className="p-6 sm:p-8">
//                 <div className="text-center mb-6 sm:mb-8">
//                   <div className={`inline-flex items-center space-x-2 p-3 rounded-2xl mb-4 ${
//                     plan.popular ? 'bg-orange-100 text-orange-600' : 'bg-gray-100 text-gray-600'
//                   }`}>
//                     {plan.icon}
//                     <span className="font-semibold">{plan.name}</span>
//                   </div>
                  
//                   <p className="text-gray-600 mb-4 text-sm sm:text-base">{plan.description}</p>
                  
//                   <div className="mb-4">
//                     <div className="flex items-center justify-center space-x-2">
//                       <span className="text-3xl sm:text-4xl font-bold text-gray-900">{plan.price}</span>
//                       <div className="text-left">
//                         <div className="text-gray-400 line-through text-sm">{plan.originalPrice}</div>
// {/*                         <div className="text-gray-600 text-sm">per month</div> */}
//                       </div>
//                     </div>
//                     <p className="text-orange-600 font-semibold text-sm mt-1">
//                       {plan.applications} applications included
//                     </p>
//                   </div>
//                 </div>

//                 <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
//                   {plan.features.map((feature, featureIndex) => (
//                     <li key={featureIndex} className="flex items-start">
//                       <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
//                       <span className="text-gray-700 text-sm sm:text-base">{feature}</span>
//                     </li>
//                   ))}
//                 </ul>

//                 <button
//                   onClick={openModal}
//                   className={`w-full py-3 sm:py-4 px-6 rounded-xl sm:rounded-2xl font-bold text-base sm:text-lg transition-all duration-200 ${
//                     plan.popular
//                       ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white hover:from-orange-600 hover:to-red-600 shadow-lg hover:shadow-xl hover:scale-105'
//                       : 'bg-gray-900 text-white hover:bg-gray-800 hover:scale-105'
//                   }`}
//                 >
//                   {plan.cta}
//                 </button>

//                 <p className="text-center text-sm text-gray-500 mt-4">
//                   No credit card required • Cancel anytime
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>

        
//       </div>
//     </section>
//   );
// };

// export default Pricing;


import React from 'react';
import { Check, Zap, Crown, Rocket } from 'lucide-react';

const Pricing = () => {
  const handlePayment = (paymentLink: string) => {
    // Open PayPal payment link in a new tab
    window.open(paymentLink, '_blank');
  };

  const plans = [
    {
      name: "Executive",
      icon: <Zap className="w-6 h-6" />,
      applications: "250",
      price: "$199",
      originalPrice: "$299",
      popular: false,
      description: "Perfect for entry-level professionals",
      paymentLink: "https://www.paypal.com/ncp/payment/F6CESAWAYUYU2",
      features: [
        "AI-powered job matching",
        "250 tailored applications",
        "Resume optimization",
        "Basic analytics dashboard",
        "Email support",
      ],
      cta: "Start Now"
    },
    {
      name: "Professional",
      icon: <Crown className="w-6 h-6" />,
      applications: "500",
      price: "$349",
      originalPrice: "$449",
      popular: true,
      description: "Most popular for mid-level professionals",
      paymentLink: "https://www.paypal.com/ncp/payment/SMTK5UYQYM4A8",
      features: [
        "Everything in Executive",
        "500 tailored applications",
        "Priority job matching",
        "Advanced analytics & insights",
        "LinkedIn profile optimization",
        // "Priority support",
        "Interview preparation tips",
      ],
      cta: "Start Now"
    },
    {
      name: "Ignite",
      icon: <Rocket className="w-6 h-6" />,
      applications: "1000",
      price: "$599",
      originalPrice: "$699",
      popular: false,
      badge: "Best Value",
      description: "For senior professionals & executives",
      paymentLink: "https://www.paypal.com/ncp/payment/CDRFGB6M566X8",
      features: [
        "Everything in Professional",
        "1000 tailored applications",
        "Executive-level job targeting",
        "Personal career consultant",
        "Portfolio development",
        "Cover letters",
        "Network introduction requests",
        "Emailing Recruiters",
      ],
      cta: "Start Now"
    }
  ];
const teamMembers = [
  {
    name: "Adit Jain",
    role: "Partner",
    image: "https://res.cloudinary.com/drit9nkha/image/upload/v1753688852/Adit_f2qfe8.webp",
    linkedin: "https://www.linkedin.com/in/adit-jain-907555218/",
    description: "Former Growth Associate with a background in operations, focused on solving user pain points through scalable, outcome-driven systems."
  },
  {
    name: "Pranjal Tripathi",
    role: "CTO",
    image: "https://res.cloudinary.com/drit9nkha/image/upload/v1753688852/pran_img_nbwdya.webp",
    linkedin: "https://www.linkedin.com/in/pranjal-tripathi-a98048222/",
    description: "AI and automation specialist with 3+ years of experience, leading Flashfire's intelligent job-matching and automation systems."
  }
];

return (
    <>
    <section id="pricing" className="py-16 sm:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-20">
          <div className="inline-flex items-center space-x-2 bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Zap className="w-4 h-4" />
            <span>Limited Time Offer</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            Choose Your Career Acceleration Plan
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-6 sm:mb-8">
            All plans include our AI-powered job matching and application automation. 
            <span className="text-orange-600 font-semibold"> Save 150+ hours monthly</span> while we work for you 24/7.
          </p>
          
          {/* Discount Banner */}
          <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-2xl p-4 sm:p-6 max-w-2xl mx-auto mb-8 sm:mb-12">
            <h3 className="text-xl sm:text-2xl font-bold mb-2">🔥 Early Bird Special - 20% OFF</h3>
            <p className="text-orange-100">Limited time offer. No code needed!</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl sm:rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 border-2 ${
                plan.popular 
                  ? 'border-orange-500 scale-100 lg:scale-105 ring-4 ring-orange-500/20' 
                  : 'border-gray-200 hover:border-orange-300'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 sm:px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                    🏆 Most Popular
                  </span>
                </div>
              )}

              {plan.badge && !plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 sm:px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                    💎 {plan.badge}
                  </span>
                </div>
              )}

              <div className="p-6 sm:p-8">
                <div className="text-center mb-6 sm:mb-8">
                  <div className={`inline-flex items-center space-x-2 p-3 rounded-2xl mb-4 ${
                    plan.popular ? 'bg-orange-100 text-orange-600' : 'bg-gray-100 text-gray-600'
                  }`}>
                    {plan.icon}
                    <span className="font-semibold">{plan.name}</span>
                  </div>
                  
                  <p className="text-gray-600 mb-4 text-sm sm:text-base">{plan.description}</p>
                  
                  <div className="mb-4">
                    <div className="flex items-center justify-center space-x-2">
                      <span className="text-3xl sm:text-4xl font-bold text-gray-900">{plan.price}</span>
                      <div className="text-left">
                        <div className="text-gray-400 line-through text-sm">{plan.originalPrice}</div>
                      </div>
                    </div>
                    <p className="text-orange-600 font-semibold text-sm mt-1">
                      {plan.applications} applications included
                    </p>
                  </div>
                </div>

                <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 text-sm sm:text-base">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => handlePayment(plan.paymentLink)}
                  className={`w-full py-3 sm:py-4 px-6 rounded-xl sm:rounded-2xl font-bold text-base sm:text-lg transition-all duration-200 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white hover:from-orange-600 hover:to-red-600 shadow-lg hover:shadow-xl hover:scale-105'
                      : 'bg-gray-900 text-white hover:bg-gray-800 hover:scale-105'
                  }`}
                >
                  {plan.cta}
                </button>

                <p className="text-center text-sm text-gray-500 mt-4">
                  Secure payment via PayPal
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Led by Experts in <span className="text-orange-500">Product, AI, and Hiring Systems</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Flashfire is built by experts in automation, product, and hiring — designed to help job seekers land offers faster, at scale.
          </p>
        </div>

        {/* Team Members Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {teamMembers.map((member, index) => (
            <div 
              key={index}
              className="text-center"
            >
              {/* Profile Image */}
              <div className="mb-6 relative inline-block">
                <div className={`w-40 h-40 rounded-full overflow-hidden ${
                  member.name === "Pranjal Tripathi" ? "bg-cover bg-center" : ""
                }`}
                style={member.name === "Pranjal Tripathi" ? {
                  backgroundImage: `url(${member.image})`,
                  backgroundSize: '120%',
                  backgroundPosition: 'center'
                } : {}}
                >
                  {member.name === "Adit Jain" && (
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover object-[center_20%]"
                    />
                  )}
                </div>
                
                {/* LinkedIn Icon */}
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute -bottom-2 -right-2 bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
              
              {/* Member Info */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {member.name}
                </h3>
                <p className="text-orange-500 font-semibold text-lg mb-4">
                  {member.role}
                </p>
                <p className="text-gray-600 text-base leading-relaxed">
                  {member.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </>
  );
  
};

export default Pricing;
