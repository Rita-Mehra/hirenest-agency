import { GraduationCap, Briefcase, FileText, CreditCard, Plane, Home } from 'lucide-react';

export function Services() {
  const studentServices = [
    {
      icon: GraduationCap,
      title: 'Course & University Selection',
      description: 'Expert guidance to choose the right course and university matching your profile and career goals'
    },
    {
      icon: FileText,
      title: 'Application Assistance',
      description: 'Complete support for university applications, SOP writing, and document preparation'
    },
    {
      icon: CreditCard,
      title: 'Student Visa Processing',
      description: 'End-to-end visa application support with high success rate'
    },
    {
      icon: Plane,
      title: 'Pre-Departure Support',
      description: 'Travel arrangements, accommodation, and orientation guidance'
    }
  ];

  const workerServices = [
    {
      icon: Briefcase,
      title: 'Job Placement Abroad',
      description: 'Skilled and unskilled job opportunities in leading countries'
    },
    {
      icon: FileText,
      title: 'Work Visa Assistance',
      description: 'Complete work permit and visa documentation support'
    },
    {
      icon: Home,
      title: 'Permanent Residency',
      description: 'PR and immigration pathways for long-term settlement'
    },
    {
      icon: CreditCard,
      title: 'Documentation & Certification',
      description: 'Credential evaluation, attestation, and verification services'
    }
  ];

  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-blue-50 text-blue-600 rounded-full mb-4">
            Our Services
          </div>
          <h2 className="mb-4">
            Comprehensive Solutions for Your Global Journey
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Whether you're a student aspiring to study abroad or a professional seeking international work opportunities, we provide complete support every step of the way.
          </p>
        </div>

        {/* Student Services */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
              <GraduationCap className="w-6 h-6 text-white" />
            </div>
            <h3>For International Students</h3>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {studentServices.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-xl hover:shadow-lg transition">
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h4 className="mb-2">{service.title}</h4>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Worker Services */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center">
              <Briefcase className="w-6 h-6 text-white" />
            </div>
            <h3>For International Workers</h3>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {workerServices.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-xl hover:shadow-lg transition">
                <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-green-600" />
                </div>
                <h4 className="mb-2">{service.title}</h4>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-12 text-white">
          <h3 className="mb-4">Ready to Start Your Journey?</h3>
          <p className="mb-8 max-w-2xl mx-auto">
            Book a free consultation with our experts and take the first step towards your international future
          </p>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition"
          >
            Schedule Free Consultation
          </button>
        </div>
      </div>
    </section>
  );
}
