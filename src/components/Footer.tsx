import { Facebook, Instagram, Linkedin, Mail, Phone } from 'lucide-react';
import logo from '../image/hirenest-logo-png.png';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src={logo} alt="HireNest Agency" width="30%" />
            </div>
            <p className="text-gray-400 mb-6">
              Your trusted partner for international education and career opportunities. Building futures, creating success stories.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition">
                <Linkedin className="w-5 h-5" />
              </a>

            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#about" className="text-gray-400 hover:text-white transition">About Us</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition">Our Services</a></li>
              <li><a href="#countries" className="text-gray-400 hover:text-white transition">Countries</a></li>
              <li><a href="#testimonials" className="text-gray-400 hover:text-white transition">Success Stories</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition">Contact Us</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-4">Our Services</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition">Student Visa</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Work Visa</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Permanent Residency</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">University Selection</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Job Placement</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="mb-4">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-blue-400 flex-shrink-0 mt-1" />
                <div>
                  <div className="text-gray-400"><a href="tel:919592923602">+91 95929-23602</a></div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-blue-400 flex-shrink-0 mt-1" />
                <div className="text-gray-400"><a className="text-gray-100" href="mailto:info@hirenest.agency">info@hirenest.agency</a></div>
              </li>
              <li className="flex items-start gap-3">
                <div className="text-gray-400">
                  GOLD HOMES, PLOT NO 8 SHOWROOM,<br /> Landran Rd, Sector 116, KHARAR, <br />Sahibzada Ajit Singh Nagar, <br />Punjab 140307
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400">
              © 2025 HireNest International Consultancy. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-gray-400 hover:text-white transition">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white transition">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white transition">Disclaimer</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
