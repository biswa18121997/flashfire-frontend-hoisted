import React, { useState, useEffect } from 'react';
import {
  X, Building, Mail, Phone, Users, MapPin, Briefcase,
  DollarSign, Calendar, Loader
} from 'lucide-react';

interface EmployerFormProps {
  employerFormVisibility: boolean;
  setEmployerFormVisibility: React.Dispatch<React.SetStateAction<boolean>>;
}

const EmployerForm: React.FC<EmployerFormProps> = ({
  employerFormVisibility,
  setEmployerFormVisibility
}) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const [formData, setFormData] = useState({
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
    companySize: '',
    industry: '',
    location: '',
    jobTitle: '',
    jobDescription: '',
    salaryRange: '',
    urgency: '',
    hiringNeeds: ''
  });

  const companySizes = [
    '1-10 employees', '11-50 employees', '51-200 employees',
    '201-500 employees', '501-1000 employees', '1000+ employees'
  ];

  const urgencyOptions = [
    'Immediate (within 1 week)', 'Soon (within 1 month)',
    'Flexible (within 3 months)', 'Planning ahead (3+ months)'
  ];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    if (!formData.companyName || !formData.contactName || !formData.email || !formData.phone) {
      setError('Please fill in all required fields');
      setLoading(false);
      return;
    }

    try {
      const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/employerform`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setSuccess(true);
        console.log('Submitted:', formData);
      } else {
        const errorText = await response.text();
        setError(errorText || 'Submission failed');
      }
    } catch (err) {
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  // ✅ Lock scroll when modal is open
  // useEffect(() => {
  //   if (employerFormVisibility) {
  //     document.body.style.overflow = 'hidden';
  //   } else {
  //     document.body.style.overflow = '';
  //   }
  //   return () => {
  //     document.body.style.overflow = '';
  //   };
  // }, [employerFormVisibility]);

  // ✅ Hide completely if modal not open
  if (!employerFormVisibility) return null;

  // ✅ Thank You Screen
  if (success) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-[999]">
        <div className="bg-white rounded-3xl max-w-2xl w-full p-8 shadow-2xl">
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Building className="w-8 h-8 text-green-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Thank You for Your Interest!</h2>
            <p className="text-xl text-gray-600 mb-8">
              Our team will contact you within 24 hours to discuss how FlashFire can help you find the perfect candidates.
            </p>
            <button
              onClick={() => {
                setEmployerFormVisibility(false);
                setSuccess(false);
              }}
              className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-full font-bold hover:from-orange-600 hover:to-orange-700 transition-all duration-200 shadow-lg"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50  flex items-center justify-center p-4 z-[999] ">
      <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[95vh] overflow-y-auto shadow-2xl">
        <div className="p-8">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">Partner with FlashFire</h2>
              <p className="text-gray-600 mt-2">Find top talent faster with our AI-powered recruitment platform</p>
            </div>
            <button
              onClick={() => setEmployerFormVisibility(false)}
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl text-red-700">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Company Info */}
            <div className="bg-gray-50 p-6 rounded-2xl">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <Building className="w-5 h-5 mr-2" /> Company Information
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text" name="companyName" value={formData.companyName} onChange={handleInputChange}
                  required placeholder="Company Name *"
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl"
                />
                <input
                  type="text" name="industry" value={formData.industry} onChange={handleInputChange}
                  placeholder="Industry"
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl"
                />
                <select
                  name="companySize" value={formData.companySize} onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl"
                >
                  <option value="">Select company size</option>
                  {companySizes.map(size => <option key={size} value={size}>{size}</option>)}
                </select>
                <input
                  type="text" name="location" value={formData.location} onChange={handleInputChange}
                  placeholder="Location"
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl"
                />
              </div>
            </div>

            {/* Contact Info */}
            <div className="bg-gray-50 p-6 rounded-2xl">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <Mail className="w-5 h-5 mr-2" /> Contact Information
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text" name="contactName" value={formData.contactName} onChange={handleInputChange}
                  required placeholder="Contact Name *"
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl"
                />
                <input
                  type="email" name="email" value={formData.email} onChange={handleInputChange}
                  required placeholder="Email *"
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl"
                />
                <input
                  type="tel" name="phone" value={formData.phone} onChange={handleInputChange}
                  required placeholder="Phone *"
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl"
                />
              </div>
            </div>

            {/* Hiring Needs */}
            <div className="bg-gray-50 p-6 rounded-2xl">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <Briefcase className="w-5 h-5 mr-2" /> Hiring Needs
              </h3>
              <input
                type="text" name="jobTitle" value={formData.jobTitle} onChange={handleInputChange}
                placeholder="Job Title / Role"
                className="w-full px-4 py-3 border border-gray-200 rounded-xl"
              />
              <textarea
                name="jobDescription" value={formData.jobDescription} onChange={handleInputChange} rows={3}
                placeholder="Job Description"
                className="w-full px-4 py-3 border border-gray-200 rounded-xl"
              />
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text" name="salaryRange" value={formData.salaryRange} onChange={handleInputChange}
                  placeholder="Salary Range"
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl"
                />
                <select
                  name="urgency" value={formData.urgency} onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl"
                >
                  <option value="">Hiring Urgency</option>
                  {urgencyOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                </select>
              </div>
              <textarea
                name="hiringNeeds" value={formData.hiringNeeds} onChange={handleInputChange} rows={3}
                placeholder="Additional details or needs..."
                className="w-full px-4 py-3 border border-gray-200 rounded-xl"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white py-4 px-6 rounded-xl font-bold hover:from-orange-600 hover:to-orange-700 transition-all duration-200 shadow-lg hover:shadow-xl disabled:opacity-50 flex items-center justify-center space-x-2"
            >
              {loading ? (
                <>
                  <Loader className="w-5 h-5 animate-spin" />
                  <span>Submitting...</span>
                </>
              ) : (
                <span>Submit Hiring Request</span>
              )}
            </button>

            <p className="text-center text-sm text-gray-500 mt-6">
              Our team will contact you within 24 hours.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EmployerForm;
