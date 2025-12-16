import Link from 'next/link';

export default function Resources() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Resources</h1>
          <p className="text-xl text-blue-100">
            Educational materials, career resources, and opportunities
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Study Materials */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">Study Materials</h2>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="text-center py-12 border-2 border-dashed border-gray-300 rounded-lg mb-8">
              <p className="text-gray-500 text-lg mb-2">📚 Study Materials Library</p>
              <p className="text-gray-400 text-sm mb-4">
                Access to course materials, lecture notes, textbooks, and study resources for telecommunications students.
              </p>
              <p className="text-gray-400 text-xs">
                Resource library coming soon
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="border rounded-lg p-4 hover:shadow-md transition">
                <div className="text-3xl mb-2">📖</div>
                <h3 className="font-semibold text-gray-900 mb-2">Textbooks & References</h3>
                <p className="text-sm text-gray-600">Recommended textbooks and reference materials</p>
              </div>
              <div className="border rounded-lg p-4 hover:shadow-md transition">
                <div className="text-3xl mb-2">📝</div>
                <h3 className="font-semibold text-gray-900 mb-2">Lecture Notes</h3>
                <p className="text-sm text-gray-600">Comprehensive lecture notes and course materials</p>
              </div>
              <div className="border rounded-lg p-4 hover:shadow-md transition">
                <div className="text-3xl mb-2">📊</div>
                <h3 className="font-semibold text-gray-900 mb-2">Past Questions</h3>
                <p className="text-sm text-gray-600">Examination past questions and solutions</p>
              </div>
            </div>
          </div>
        </section>

        {/* Industry Reports */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">Industry Reports & Publications</h2>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="text-center py-12 border-2 border-dashed border-gray-300 rounded-lg mb-8">
              <p className="text-gray-500 text-lg mb-2">📊 Industry Reports</p>
              <p className="text-gray-400 text-sm">
                Access to industry reports, research publications, and telecommunications sector analysis.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border rounded-lg p-4 hover:shadow-md transition">
                <h3 className="font-semibold text-gray-900 mb-2">NCC Reports</h3>
                <p className="text-sm text-gray-600">Reports from the Nigerian Communications Commission</p>
              </div>
              <div className="border rounded-lg p-4 hover:shadow-md transition">
                <h3 className="font-semibold text-gray-900 mb-2">IEEE Publications</h3>
                <p className="text-sm text-gray-600">Access to IEEE telecommunications publications</p>
              </div>
              <div className="border rounded-lg p-4 hover:shadow-md transition">
                <h3 className="font-semibold text-gray-900 mb-2">ITU Reports</h3>
                <p className="text-sm text-gray-600">International Telecommunication Union reports and data</p>
              </div>
              <div className="border rounded-lg p-4 hover:shadow-md transition">
                <h3 className="font-semibold text-gray-900 mb-2">Research Papers</h3>
                <p className="text-sm text-gray-600">Academic research papers and publications</p>
              </div>
            </div>
          </div>
        </section>

        {/* Career Development */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">Career Development</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl mb-4">💼</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Job Opportunities</h3>
              <p className="text-gray-600 mb-4">
                Browse job listings in the telecommunications industry, including entry-level positions, 
                internships, and career opportunities.
              </p>
              <div className="text-center py-8 border-2 border-dashed border-gray-300 rounded-lg">
                <p className="text-gray-400 text-sm">Job board coming soon</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl mb-4">🎓</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Internship Listings</h3>
              <p className="text-gray-600 mb-4">
                Find internship opportunities with leading telecommunications companies and organizations 
                to gain practical experience.
              </p>
              <div className="text-center py-8 border-2 border-dashed border-gray-300 rounded-lg">
                <p className="text-gray-400 text-sm">Internship listings coming soon</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl mb-4">📋</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Career Guidance</h3>
              <p className="text-gray-600 mb-4">
                Resources for career planning, resume writing, interview preparation, and professional development 
                in telecommunications.
              </p>
              <div className="text-center py-8 border-2 border-dashed border-gray-300 rounded-lg">
                <p className="text-gray-400 text-sm">Career resources coming soon</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Mentorship</h3>
              <p className="text-gray-600 mb-4">
                Connect with industry professionals and alumni for mentorship, career advice, and guidance 
                on your professional journey.
              </p>
              <div className="text-center py-8 border-2 border-dashed border-gray-300 rounded-lg">
                <p className="text-gray-400 text-sm">Mentorship program coming soon</p>
              </div>
            </div>
          </div>
        </section>

        {/* Scholarships */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">Scholarship Opportunities</h2>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="text-center py-12 border-2 border-dashed border-gray-300 rounded-lg mb-8">
              <p className="text-gray-500 text-lg mb-2">🎓 Scholarship Portal</p>
              <p className="text-gray-400 text-sm mb-4">
                Information about available scholarships, grants, and financial aid opportunities for 
                telecommunications students.
              </p>
              <p className="text-gray-400 text-xs">
                Scholarship listings coming soon
              </p>
            </div>
            <div className="space-y-4">
              <div className="border-l-4 border-blue-900 pl-4 py-2">
                <h4 className="font-semibold text-gray-900">Partner Organization Scholarships</h4>
                <p className="text-sm text-gray-600">Scholarships from NUTELS partner organizations</p>
              </div>
              <div className="border-l-4 border-green-900 pl-4 py-2">
                <h4 className="font-semibold text-gray-900">Industry Scholarships</h4>
                <p className="text-sm text-gray-600">Scholarships sponsored by telecommunications companies</p>
              </div>
              <div className="border-l-4 border-purple-900 pl-4 py-2">
                <h4 className="font-semibold text-gray-900">Academic Excellence Awards</h4>
                <p className="text-sm text-gray-600">Recognition and awards for outstanding academic performance</p>
              </div>
            </div>
          </div>
        </section>

        {/* Downloads */}
        <section>
          <h2 className="text-3xl font-bold mb-8 text-gray-900">Downloads</h2>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="text-center py-12 border-2 border-dashed border-gray-300 rounded-lg">
              <p className="text-gray-500 text-lg mb-2">📥 Download Center</p>
              <p className="text-gray-400 text-sm">
                Downloadable resources including forms, templates, guidelines, and other documents will be available here.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

