export default function Gallery() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Gallery</h1>
          <p className="text-xl text-blue-100">
            Moments from our events, conferences, and activities
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Photo Gallery */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">Photo Gallery</h2>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="text-center py-12 border-2 border-dashed border-gray-300 rounded-lg mb-8">
              <p className="text-gray-500 text-lg mb-2">📸 Photo Gallery</p>
              <p className="text-gray-400 text-sm mb-4">
                A comprehensive collection of photos from NUTELS events, conferences, workshops, and activities 
                will be displayed here.
              </p>
              <p className="text-gray-400 text-xs">
                Gallery functionality coming soon
              </p>
            </div>

            {/* Placeholder Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                <div
                  key={item}
                  className="aspect-square bg-gradient-to-br from-blue-200 to-blue-400 rounded-lg flex items-center justify-center text-white text-2xl"
                >
                  📷
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Event Categories */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">Browse by Event</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <div className="text-4xl mb-4">🎓</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">National Conventions</h3>
              <p className="text-gray-600 text-sm">
                Photos from annual national conventions, elections, and policy reviews.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <div className="text-4xl mb-4">💻</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Workshops</h3>
              <p className="text-gray-600 text-sm">
                Images from technical workshops, training sessions, and capacity building programs.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <div className="text-4xl mb-4">🏆</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Hackathons</h3>
              <p className="text-gray-600 text-sm">
                Moments from hackathon competitions, innovation challenges, and tech competitions.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <div className="text-4xl mb-4">🏭</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Industrial Visits</h3>
              <p className="text-gray-600 text-sm">
                Photos from visits to telecommunications companies and industry facilities.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <div className="text-4xl mb-4">👥</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Networking Events</h3>
              <p className="text-gray-600 text-sm">
                Images from networking sessions, meetups, and social gatherings.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <div className="text-4xl mb-4">🎉</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Awards & Recognition</h3>
              <p className="text-gray-600 text-sm">
                Photos from award ceremonies, recognition events, and achievement celebrations.
              </p>
            </div>
          </div>
        </section>

        {/* Video Gallery */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">Video Gallery</h2>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="text-center py-12 border-2 border-dashed border-gray-300 rounded-lg mb-8">
              <p className="text-gray-500 text-lg mb-2">🎥 Video Gallery</p>
              <p className="text-gray-400 text-sm mb-4">
                Videos from events, interviews, highlights, and educational content will be displayed here.
              </p>
              <p className="text-gray-400 text-xs">
                Video gallery functionality coming soon
              </p>
            </div>

            {/* Placeholder Video Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3].map((item) => (
                <div
                  key={item}
                  className="aspect-video bg-gradient-to-br from-gray-300 to-gray-500 rounded-lg flex items-center justify-center text-white text-4xl"
                >
                  ▶️
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Year Archive */}
        <section>
          <h2 className="text-3xl font-bold mb-8 text-gray-900">Browse by Year</h2>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="border rounded-lg p-4 text-center hover:bg-blue-50 transition cursor-pointer">
                <div className="text-2xl font-bold text-blue-900 mb-2">2024</div>
                <div className="text-sm text-gray-600">Current Year</div>
              </div>
              <div className="border rounded-lg p-4 text-center hover:bg-blue-50 transition cursor-pointer">
                <div className="text-2xl font-bold text-blue-900 mb-2">2023</div>
                <div className="text-sm text-gray-600">50+ Events</div>
              </div>
              <div className="border rounded-lg p-4 text-center hover:bg-blue-50 transition cursor-pointer">
                <div className="text-2xl font-bold text-blue-900 mb-2">2022</div>
                <div className="text-sm text-gray-600">45+ Events</div>
              </div>
              <div className="border rounded-lg p-4 text-center hover:bg-blue-50 transition cursor-pointer">
                <div className="text-2xl font-bold text-blue-900 mb-2">2021</div>
                <div className="text-sm text-gray-600">40+ Events</div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

