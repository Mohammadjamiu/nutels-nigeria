import Link from 'next/link';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-bold mb-4">About NUTELS</h3>
            <p className="text-gray-400 text-sm mb-4 leading-relaxed">
              National Union of Telecommunications Students (NUTELS) Nigeria - 
              Fostering unity, excellence, and innovation in telecommunications education.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/programs" className="text-gray-400 hover:text-white transition-colors">Programs & Events</Link></li>
              <li><Link href="/membership" className="text-gray-400 hover:text-white transition-colors">Membership</Link></li>
              <li><Link href="/news" className="text-gray-400 hover:text-white transition-colors">News & Updates</Link></li>
              <li><Link href="/chapters" className="text-gray-400 hover:text-white transition-colors">Chapters</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-bold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/resources" className="text-gray-400 hover:text-white transition-colors">Study Materials</Link></li>
              <li><Link href="/resources" className="text-gray-400 hover:text-white transition-colors">Career Development</Link></li>
              <li><Link href="/resources" className="text-gray-400 hover:text-white transition-colors">Scholarships</Link></li>
              <li><Link href="/gallery" className="text-gray-400 hover:text-white transition-colors">Gallery</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-start">
                <Mail size={16} className="mr-2 mt-0.5 flex-shrink-0" />
                <a href="mailto:info@nutels.org.ng" className="hover:text-white transition-colors">info@nutels.org.ng</a>
              </li>
              <li className="flex items-start">
                <Phone size={16} className="mr-2 mt-0.5 flex-shrink-0" />
                <span>+234 XXX XXX XXXX</span>
              </li>
              <li className="flex items-start">
                <MapPin size={16} className="mr-2 mt-0.5 flex-shrink-0" />
                <span>
                  National Secretariat<br />
                  NUTELS Nigeria
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} National Union of Telecommunications Students (NUTELS) Nigeria. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
