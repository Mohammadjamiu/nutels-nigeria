import Link from 'next/link';

export default function Programs() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Programs & Events</h1>
          <p className="text-xl text-blue-100">
            Building capacity, fostering innovation, and creating opportunities
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Event Calendar Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">Event Calendar</h2>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="text-center py-12 border-2 border-dashed border-gray-300 rounded-lg">
              <p className="text-gray-500 text-lg mb-2">📅 Interactive Calendar</p>
              <p className="text-gray-400 text-sm mb-4">
                A full calendar view of all upcoming events, workshops, and activities will be displayed here.
              </p>
              <p className="text-gray-400 text-xs">
                Calendar functionality coming soon
              </p>
            </div>
          </div>
        </section>

        {/* Upcoming Events */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">Upcoming Events</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-900">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div>
                  <div className="text-sm text-gray-500 mb-2">April 20-22, 2024 • Lagos, Nigeria</div>
                  <h3 className="text-2xl font-semibold mb-2 text-gray-900">National Convention 2024</h3>
                  <p className="text-gray-700 mb-4">
                    The annual national convention featuring elections, policy reviews, workshops, networking opportunities, 
                    and the presentation of annual reports. Delegates from all institutional chapters and zones will be in attendance.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-blue-100 text-blue-900 rounded-full text-sm">Convention</span>
                    <span className="px-3 py-1 bg-green-100 text-green-900 rounded-full text-sm">Elections</span>
                    <span className="px-3 py-1 bg-purple-100 text-purple-900 rounded-full text-sm">Workshops</span>
                  </div>
                </div>
                <div className="mt-4 md:mt-0 md:ml-6">
                  <button className="bg-blue-900 text-white px-6 py-2 rounded-lg hover:bg-blue-800 transition font-semibold">
                    Register
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-900">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div>
                  <div className="text-sm text-gray-500 mb-2">May 15, 2024 • Abuja, Nigeria</div>
                  <h3 className="text-2xl font-semibold mb-2 text-gray-900">Telecommunications Hackathon 2024</h3>
                  <p className="text-gray-700 mb-4">
                    Annual hackathon competition showcasing innovation in telecommunications technology. 
                    Open to all NUTELS members. Prizes and recognition for top innovations.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-green-100 text-green-900 rounded-full text-sm">Competition</span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-900 rounded-full text-sm">Innovation</span>
                    <span className="px-3 py-1 bg-yellow-100 text-yellow-900 rounded-full text-sm">Prizes</span>
                  </div>
                </div>
                <div className="mt-4 md:mt-0 md:ml-6">
                  <button className="bg-green-900 text-white px-6 py-2 rounded-lg hover:bg-green-800 transition font-semibold">
                    Register
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-purple-900">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div>
                  <div className="text-sm text-gray-500 mb-2">June 10, 2024 • Online</div>
                  <h3 className="text-2xl font-semibold mb-2 text-gray-900">Industry Workshop Series</h3>
                  <p className="text-gray-700 mb-4">
                    Monthly workshop series featuring industry experts, covering topics from 5G technology to network security 
                    and career development in telecommunications.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-purple-100 text-purple-900 rounded-full text-sm">Workshop</span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-900 rounded-full text-sm">Online</span>
                    <span className="px-3 py-1 bg-orange-100 text-orange-900 rounded-full text-sm">Career</span>
                  </div>
                </div>
                <div className="mt-4 md:mt-0 md:ml-6">
                  <button className="bg-purple-900 text-white px-6 py-2 rounded-lg hover:bg-purple-800 transition font-semibold">
                    Register
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Program Types */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">Our Programs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl mb-4">🎓</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Academic Conferences</h3>
              <p className="text-gray-600">
                Annual conferences bringing together students, academics, and industry professionals to discuss 
                the latest trends and research in telecommunications.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl mb-4">💻</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Workshops</h3>
              <p className="text-gray-600">
                Hands-on workshops covering technical skills, industry best practices, and emerging technologies 
                in telecommunications.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl mb-4">🏆</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Hackathons</h3>
              <p className="text-gray-600">
                Innovation competitions where students showcase their problem-solving skills and develop 
                solutions for real-world telecommunications challenges.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl mb-4">🏭</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Industrial Visits</h3>
              <p className="text-gray-600">
                Organized visits to telecommunications companies and facilities to provide practical exposure 
                to industry operations.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl mb-4">👥</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Mentorship Programs</h3>
              <p className="text-gray-600">
                Connecting students with industry professionals and alumni for guidance, career advice, 
                and professional development.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl mb-4">📚</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Training Programs</h3>
              <p className="text-gray-600">
                Comprehensive training programs designed to enhance technical skills and prepare students 
                for careers in telecommunications.
              </p>
            </div>
          </div>
        </section>

        {/* Past Activities */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">Past Activities</h2>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="text-center py-12 border-2 border-dashed border-gray-300 rounded-lg mb-8">
              <p className="text-gray-500 text-lg mb-2">📸 Past Events Gallery</p>
              <p className="text-gray-400 text-sm mb-4">
                A comprehensive archive of past events, conferences, workshops, and activities will be displayed here.
              </p>
              <p className="text-gray-400 text-xs">
                Gallery and archive functionality coming soon
              </p>
            </div>

            {/* Placeholder for past events list */}
            <div className="space-y-4">
              <div className="border-l-4 border-gray-300 pl-4 py-2">
                <div className="text-sm text-gray-500">2023</div>
                <h4 className="font-semibold text-gray-900">National Convention 2023</h4>
                <p className="text-sm text-gray-600">Held in Lagos with over 500 delegates in attendance</p>
              </div>
              <div className="border-l-4 border-gray-300 pl-4 py-2">
                <div className="text-sm text-gray-500">2023</div>
                <h4 className="font-semibold text-gray-900">Telecommunications Hackathon 2023</h4>
                <p className="text-sm text-gray-600">Innovation competition with 50+ participating teams</p>
              </div>
              <div className="border-l-4 border-gray-300 pl-4 py-2">
                <div className="text-sm text-gray-500">2023</div>
                <h4 className="font-semibold text-gray-900">Industry Workshop Series 2023</h4>
                <p className="text-sm text-gray-600">12 workshops covering various telecommunications topics</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

