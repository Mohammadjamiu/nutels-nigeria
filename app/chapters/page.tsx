export default function Chapters() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Chapters & Branches</h1>
          <p className="text-xl text-blue-100">
            NUTELS chapters across Nigeria's institutions
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Zonal Structure */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">Zonal Structure</h2>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <p className="text-gray-700 mb-6 leading-relaxed">
              NUTELS is organized into Zonal Coordinating Committees (ZCCs) divided into geographical zones 
              for effective grassroots organization and coordination across Nigeria.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="border-l-4 border-blue-900 p-4 bg-blue-50 rounded">
                <h3 className="font-semibold text-gray-900 mb-2">North-West Zone</h3>
                <p className="text-sm text-gray-600">Coordinating chapters in the North-West region</p>
              </div>
              <div className="border-l-4 border-green-900 p-4 bg-green-50 rounded">
                <h3 className="font-semibold text-gray-900 mb-2">North-East Zone</h3>
                <p className="text-sm text-gray-600">Coordinating chapters in the North-East region</p>
              </div>
              <div className="border-l-4 border-purple-900 p-4 bg-purple-50 rounded">
                <h3 className="font-semibold text-gray-900 mb-2">North-Central Zone</h3>
                <p className="text-sm text-gray-600">Coordinating chapters in the North-Central region</p>
              </div>
              <div className="border-l-4 border-orange-900 p-4 bg-orange-50 rounded">
                <h3 className="font-semibold text-gray-900 mb-2">South-West Zone</h3>
                <p className="text-sm text-gray-600">Coordinating chapters in the South-West region</p>
              </div>
              <div className="border-l-4 border-red-900 p-4 bg-red-50 rounded">
                <h3 className="font-semibold text-gray-900 mb-2">South-East Zone</h3>
                <p className="text-sm text-gray-600">Coordinating chapters in the South-East region</p>
              </div>
              <div className="border-l-4 border-indigo-900 p-4 bg-indigo-50 rounded">
                <h3 className="font-semibold text-gray-900 mb-2">South-South Zone</h3>
                <p className="text-sm text-gray-600">Coordinating chapters in the South-South region</p>
              </div>
            </div>
          </div>
        </section>

        {/* Institutional Chapters */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">Institutional Chapters</h2>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <p className="text-gray-700 mb-6">
              Each institution with telecommunications programs has a local NUTELS chapter with elected officials. 
              Below is a list of active institutional chapters:
            </p>
            
            {/* Placeholder for chapters list */}
            <div className="text-center py-12 border-2 border-dashed border-gray-300 rounded-lg mb-8">
              <p className="text-gray-500 text-lg mb-2">🏫 Institutional Chapters Directory</p>
              <p className="text-gray-400 text-sm mb-4">
                A comprehensive directory of all institutional chapters with contact information, 
                chapter officials, and location details will be displayed here.
              </p>
              <p className="text-gray-400 text-xs">
                Chapter directory functionality coming soon
              </p>
            </div>

            {/* Sample Chapter Structure */}
            <div className="space-y-4">
              <div className="border rounded-lg p-6 hover:shadow-md transition">
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Sample University Chapter</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600">
                  <div>
                    <strong className="text-gray-900">Location:</strong> City, State
                  </div>
                  <div>
                    <strong className="text-gray-900">Zone:</strong> South-West
                  </div>
                  <div>
                    <strong className="text-gray-900">Contact:</strong> chapter@example.edu.ng
                  </div>
                  <div>
                    <strong className="text-gray-900">President:</strong> [Name]
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Chapter Information */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">Starting a New Chapter</h2>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <p className="text-gray-700 mb-6 leading-relaxed">
              If your institution doesn't have a NUTELS chapter yet, you can start one! Each institutional chapter 
              operates with elected officials and maintains regular monthly meetings.
            </p>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-900 text-white rounded-full flex items-center justify-center font-bold mr-4">
                  1
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Contact National Secretariat</h3>
                  <p className="text-gray-600 text-sm">
                    Reach out to the National Executive Council to express interest in establishing a chapter.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-900 text-white rounded-full flex items-center justify-center font-bold mr-4">
                  2
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Gather Interested Students</h3>
                  <p className="text-gray-600 text-sm">
                    Identify and organize telecommunications students at your institution who are interested in joining.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-900 text-white rounded-full flex items-center justify-center font-bold mr-4">
                  3
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Follow Establishment Guidelines</h3>
                  <p className="text-gray-600 text-sm">
                    Work with the National Secretariat to follow the proper procedures for chapter establishment.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-900 text-white rounded-full flex items-center justify-center font-bold mr-4">
                  4
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Elect Chapter Officials</h3>
                  <p className="text-gray-600 text-sm">
                    Hold elections for chapter leadership positions in accordance with NUTELS guidelines.
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-6">
              <a
                href="/contact"
                className="inline-block bg-blue-900 text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition font-semibold"
              >
                Contact Us to Start a Chapter
              </a>
            </div>
          </div>
        </section>

        {/* Chapter Map Placeholder */}
        <section>
          <h2 className="text-3xl font-bold mb-8 text-gray-900">Chapter Locations</h2>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="text-center py-12 border-2 border-dashed border-gray-300 rounded-lg">
              <p className="text-gray-500 text-lg mb-2">🗺️ Interactive Map</p>
              <p className="text-gray-400 text-sm">
                An interactive map showing the locations of all NUTELS chapters across Nigeria will be displayed here.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

