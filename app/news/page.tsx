import Link from 'next/link';

export default function News() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">News & Updates</h1>
          <p className="text-xl text-blue-100">
            Stay informed about the latest happenings in NUTELS
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Newsletter Signup */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Subscribe to Our Newsletter</h2>
            <p className="text-blue-100 mb-6">
              Get the latest news, updates, and announcements delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition">
                Subscribe
              </button>
            </div>
          </div>
        </section>

        {/* News Articles */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">Latest News</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* News Article 1 */}
            <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
              <div className="h-48 bg-gradient-to-br from-blue-400 to-blue-600"></div>
              <div className="p-6">
                <div className="text-sm text-gray-500 mb-2">March 15, 2024</div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">National Convention 2024 Registration Opens</h3>
                <p className="text-gray-600 mb-4">
                  Registration for the annual National Convention is now open. Join us in Lagos for three days of 
                  workshops, elections, networking, and policy reviews.
                </p>
                <Link href="#" className="text-blue-900 font-semibold hover:underline">
                  Read More →
                </Link>
              </div>
            </article>

            {/* News Article 2 */}
            <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
              <div className="h-48 bg-gradient-to-br from-green-400 to-green-600"></div>
              <div className="p-6">
                <div className="text-sm text-gray-500 mb-2">March 10, 2024</div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Hackathon 2024: Innovation Challenge</h3>
                <p className="text-gray-600 mb-4">
                  The annual Telecommunications Hackathon is back! Registration is now open for teams to showcase 
                  their innovation and compete for exciting prizes.
                </p>
                <Link href="#" className="text-blue-900 font-semibold hover:underline">
                  Read More →
                </Link>
              </div>
            </article>

            {/* News Article 3 */}
            <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
              <div className="h-48 bg-gradient-to-br from-purple-400 to-purple-600"></div>
              <div className="p-6">
                <div className="text-sm text-gray-500 mb-2">March 5, 2024</div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">New Institutional Chapter Established</h3>
                <p className="text-gray-600 mb-4">
                  We're excited to welcome our newest institutional chapter. This expansion strengthens our 
                  network across Nigeria's higher education institutions.
                </p>
                <Link href="#" className="text-blue-900 font-semibold hover:underline">
                  Read More →
                </Link>
              </div>
            </article>

            {/* News Article 4 */}
            <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
              <div className="h-48 bg-gradient-to-br from-orange-400 to-orange-600"></div>
              <div className="p-6">
                <div className="text-sm text-gray-500 mb-2">February 28, 2024</div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Industry Partnership Announcement</h3>
                <p className="text-gray-600 mb-4">
                  NUTELS announces a new partnership with leading telecommunications companies to provide 
                  internship and career opportunities for members.
                </p>
                <Link href="#" className="text-blue-900 font-semibold hover:underline">
                  Read More →
                </Link>
              </div>
            </article>

            {/* News Article 5 */}
            <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
              <div className="h-48 bg-gradient-to-br from-red-400 to-red-600"></div>
              <div className="p-6">
                <div className="text-sm text-gray-500 mb-2">February 20, 2024</div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Workshop Series: 5G Technology</h3>
                <p className="text-gray-600 mb-4">
                  Join us for an exclusive workshop series on 5G technology, featuring industry experts and 
                  hands-on demonstrations. Registration now open.
                </p>
                <Link href="#" className="text-blue-900 font-semibold hover:underline">
                  Read More →
                </Link>
              </div>
            </article>

            {/* News Article 6 */}
            <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
              <div className="h-48 bg-gradient-to-br from-indigo-400 to-indigo-600"></div>
              <div className="p-6">
                <div className="text-sm text-gray-500 mb-2">February 15, 2024</div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Scholarship Opportunities Available</h3>
                <p className="text-gray-600 mb-4">
                  NUTELS members can now apply for various scholarship opportunities from our partner organizations. 
                  Application deadline approaching.
                </p>
                <Link href="#" className="text-blue-900 font-semibold hover:underline">
                  Read More →
                </Link>
              </div>
            </article>
          </div>
        </section>

        {/* Press Releases Placeholder */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">Press Releases</h2>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="text-center py-12 border-2 border-dashed border-gray-300 rounded-lg">
              <p className="text-gray-500 text-lg mb-2">📰 Press Releases</p>
              <p className="text-gray-400 text-sm">
                Official press releases and statements from NUTELS will be displayed here.
              </p>
            </div>
          </div>
        </section>

        {/* Archive */}
        <section>
          <h2 className="text-3xl font-bold mb-8 text-gray-900">News Archive</h2>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="space-y-4">
              <div className="border-l-4 border-gray-300 pl-4 py-2">
                <div className="text-sm text-gray-500">2023</div>
                <h4 className="font-semibold text-gray-900">All 2023 News Articles</h4>
                <p className="text-sm text-gray-600">Browse news and updates from 2023</p>
              </div>
              <div className="border-l-4 border-gray-300 pl-4 py-2">
                <div className="text-sm text-gray-500">2022</div>
                <h4 className="font-semibold text-gray-900">All 2022 News Articles</h4>
                <p className="text-sm text-gray-600">Browse news and updates from 2022</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

