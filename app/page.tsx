import Link from 'next/link';
import Image from 'next/image';
import { Target, Rocket, Handshake, ArrowRight, Calendar, TrendingUp } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                National Union of Telecommunications Students
                <span className="block text-blue-300 mt-2">NUTELS Nigeria</span>
              </h1>
              <p className="text-xl mb-8 text-blue-100 leading-relaxed">
                Fostering unity, excellence, and innovation in telecommunications education across Nigeria.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLScx0QMdcKmuAG9mszVBYarr8Q7EbkiYN_uMh6rvH3IUyAjNAA/viewform?usp=publish-editor"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition text-center inline-flex items-center justify-center"
                >
                  Join NUTELS
                  <ArrowRight size={18} className="ml-2" />
                </a>
                <Link
                  href="/about"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition text-center"
                >
                  Learn More
                </Link>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative w-64 h-64">
                <Image
                  src="/nutels-logo.png"
                  alt="NUTELS Logo"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-900 mb-2">50+</div>
              <div className="text-gray-600">Institutions</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-900 mb-2">5000+</div>
              <div className="text-gray-600">Members</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-900 mb-2">100+</div>
              <div className="text-gray-600">Events</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-900 mb-2">6</div>
              <div className="text-gray-600">Zones</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About NUTELS</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              A non-political, non-religious, non-profit academic and professional student body 
              for all students studying Telecommunications or related disciplines across institutions of higher learning in Nigeria.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-lg bg-blue-50">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 mb-4">
                <Target className="text-blue-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                Foster unity and collaboration among telecommunication students nationwide while promoting academic excellence.
              </p>
            </div>
            <div className="text-center p-6 rounded-lg bg-green-50">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-4">
                <Rocket className="text-green-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Innovation</h3>
              <p className="text-gray-600 leading-relaxed">
                Promote research, innovation, and capacity building in telecommunications and related fields.
              </p>
            </div>
            <div className="text-center p-6 rounded-lg bg-purple-50">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-purple-100 mb-4">
                <Handshake className="text-purple-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Partnership</h3>
              <p className="text-gray-600 leading-relaxed">
                Collaborate with government bodies, industry stakeholders, and professional associations.
              </p>
            </div>
          </div>
          <div className="text-center mt-8">
            <Link
              href="/about"
              className="inline-flex items-center bg-blue-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition"
            >
              Learn More About Us
              <ArrowRight size={18} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Recent News */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Latest News</h2>
            <Link
              href="/news"
              className="text-blue-900 font-semibold hover:underline inline-flex items-center"
            >
              View All News
              <ArrowRight size={18} className="ml-1" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Placeholder News Items */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
              <div className="h-48 bg-gradient-to-br from-blue-400 to-blue-600"></div>
              <div className="p-6">
                <div className="text-sm text-gray-500 mb-2">March 15, 2024</div>
                <h3 className="text-xl font-semibold mb-2">National Convention 2024</h3>
                <p className="text-gray-600 leading-relaxed">
                  Join us for the annual national convention featuring workshops, elections, and networking opportunities.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
              <div className="h-48 bg-gradient-to-br from-green-400 to-green-600"></div>
              <div className="p-6">
                <div className="text-sm text-gray-500 mb-2">March 10, 2024</div>
                <h3 className="text-xl font-semibold mb-2">Hackathon Registration Open</h3>
                <p className="text-gray-600 leading-relaxed">
                  Registration is now open for the annual telecommunications hackathon. Showcase your innovation!
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
              <div className="h-48 bg-gradient-to-br from-purple-400 to-purple-600"></div>
              <div className="p-6">
                <div className="text-sm text-gray-500 mb-2">March 5, 2024</div>
                <h3 className="text-xl font-semibold mb-2">New Chapter Established</h3>
                <p className="text-gray-600 leading-relaxed">
                  We're excited to welcome our newest institutional chapter. Expanding our reach across Nigeria.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Upcoming Events</h2>
            <Link
              href="/programs"
              className="text-blue-900 font-semibold hover:underline inline-flex items-center"
            >
              View Calendar
              <ArrowRight size={18} className="ml-1" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border-l-4 border-blue-900 pl-6 py-4">
              <div className="flex items-center space-x-2 mb-2">
                <Calendar className="text-blue-900" size={18} />
                <div className="text-sm text-gray-500">April 20-22, 2024</div>
              </div>
              <h3 className="text-xl font-semibold mb-2">National Convention 2024</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Annual gathering featuring elections, policy reviews, workshops, and networking opportunities.
              </p>
              <Link href="/programs" className="text-blue-900 font-semibold hover:underline inline-flex items-center">
                Learn More
                <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>
            <div className="border-l-4 border-green-900 pl-6 py-4">
              <div className="flex items-center space-x-2 mb-2">
                <TrendingUp className="text-green-900" size={18} />
                <div className="text-sm text-gray-500">May 15, 2024</div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Telecommunications Hackathon</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Compete in our annual hackathon showcasing innovation in telecommunications technology.
              </p>
              <Link href="/programs" className="text-blue-900 font-semibold hover:underline inline-flex items-center">
                Learn More
                <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Join NUTELS?</h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto leading-relaxed">
            Become part of a vibrant community of telecommunications students working together for excellence and innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLScx0QMdcKmuAG9mszVBYarr8Q7EbkiYN_uMh6rvH3IUyAjNAA/viewform?usp=publish-editor"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition"
            >
              Join NUTELS
              <ArrowRight size={18} className="ml-2" />
            </a>
            <Link
              href="/membership"
              className="inline-flex items-center border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
