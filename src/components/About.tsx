import { Award, Users, Globe, CheckCircle } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-block px-4 py-2 bg-blue-50 text-blue-600 rounded-full mb-4">
              About HireNest
            </div>
            <h2 className="mb-6">
              Leading International Consultancy Agency
            </h2>
            <p className="text-gray-600 mb-6">
              HireNest Agency is your trusted partner in achieving international success. With years of expertise in student placement and worker immigration, we've helped thousands realize their dreams of studying and working abroad.
            </p>
            <p className="text-gray-600 mb-8">
              Our dedicated team of experts provides personalized guidance throughout your journey, from initial consultation to successful visa approval and beyond.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                <div>
                  <div className="text-gray-900 mb-1">Expert Counselling</div>
                  <div className="text-gray-600">Personalized guidance from experienced consultants</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                <div>
                  <div className="text-gray-900 mb-1">End-to-End Support</div>
                  <div className="text-gray-600">Complete assistance from application to arrival</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                <div>
                  <div className="text-gray-900 mb-1">Proven Track Record</div>
                  <div className="text-gray-600">98% success rate in visa approvals</div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1758518725921-1eb74ed293be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBjb25zdWx0YXRpb24lMjBtZWV0aW5nfGVufDF8fHx8MTc2NTA0NzA3OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Consultation"
              className="rounded-2xl shadow-2xl"
            />
            
            {/* Floating Cards */}
            <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-xl shadow-xl max-w-xs">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Award className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <div className="text-gray-900">ISO Certified</div>
                  <div className="text-gray-600">Quality Assured</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Value Props */}
        <div className="grid md:grid-cols-3 gap-8 mt-24">
          <div className="text-center p-8 bg-gradient-to-br from-blue-50 to-white rounded-2xl">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h3 className="mb-3">Expert Team</h3>
            <p className="text-gray-600">
              Experienced consultants with in-depth knowledge of immigration laws and education systems
            </p>
          </div>

          <div className="text-center p-8 bg-gradient-to-br from-green-50 to-white rounded-2xl">
            <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Globe className="w-8 h-8 text-white" />
            </div>
            <h3 className="mb-3">Global Network</h3>
            <p className="text-gray-600">
              Strong partnerships with universities and employers across 25+ countries
            </p>
          </div>

          <div className="text-center p-8 bg-gradient-to-br from-purple-50 to-white rounded-2xl">
            <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="w-8 h-8 text-white" />
            </div>
            <h3 className="mb-3">Quality Service</h3>
            <p className="text-gray-600">
              Personalized attention and ethical practices ensuring your success
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
