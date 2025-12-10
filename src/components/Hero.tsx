import { ArrowRight, Phone, Mail } from 'lucide-react';
import logo from '../image/hirenest-logo-png.png';

export function Hero() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1436491865332-7a61a109cc05?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhaXJwbGFuZSUyMHRyYXZlbHxlbnwxfHx8fDE3NjUxMDgzMTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/95 to-blue-700/85" />
      </div>

      {/* Navigation */}
      <nav className="absolute top-0 left-0 right-0 z-20 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            {/* <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
              <span className="text-blue-600">HN</span>
            </div>
            <span className="text-white">HireNest Agency</span> */}
            <img src={logo} alt="HireNest Agency" width="25%" />
          </div>
          <div className="hidden md:flex items-center gap-6 text-white">
            <a href="#about" className="hover:text-blue-200 transition">About</a>
            <a href="#services" className="hover:text-blue-200 transition">Services</a>
            <a href="#countries" className="hover:text-blue-200 transition">Countries</a>
            <a href="#testimonials" className="hover:text-blue-200 transition">Testimonials</a>
            <a href="#contact" className="hover:text-blue-200 transition">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24">
        <div className="max-w-3xl">
          <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6">
            <span className="text-white">Your Gateway to Global Opportunities</span>
          </div>

          <h1 className="text-white mb-6">
            Turn Your International Dreams Into Reality
          </h1>

          <p className="text-white/90 text-xl mb-8 max-w-2xl">
            Expert guidance for students seeking world-class education and professionals pursuing international career opportunities in USA, UK, Canada, Europe, and beyond.
          </p>

          <div className="flex flex-wrap gap-4 mb-12">
            <button
              onClick={scrollToContact}
              className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition flex items-center gap-2"
            >
              Get Free Consultation
              <ArrowRight className="w-5 h-5" />
            </button>
            <a
              href="#services"
              className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg hover:bg-white/10 transition"
            >
              Our Services
            </a>
          </div>

          <div className="flex flex-wrap gap-6 text-white">
            <div className="flex items-center gap-2">
              <Phone className="w-5 h-5" />
              <span><a href="tel:919592923602">+91 95929-23602</a></span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-5 h-5" />
              <a className="text-gray-100" href="mailto:info@hirenest.agency">info@hirenest.agency</a>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="absolute bottom-0 left-0 right-0 z-10 bg-white/95 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-blue-600 mb-2">15,000+</div>
              <div className="text-gray-600">Students Placed</div>
            </div>
            <div className="text-center">
              <div className="text-blue-600 mb-2">50+</div>
              <div className="text-gray-600">Partner Universities</div>
            </div>
            <div className="text-center">
              <div className="text-blue-600 mb-2">25+</div>
              <div className="text-gray-600">Countries</div>
            </div>
            <div className="text-center">
              <div className="text-blue-600 mb-2">98%</div>
              <div className="text-gray-600">Success Rate</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
