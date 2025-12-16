import { Target, Eye, CheckCircle2, Users, Building2, Scale, Award } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About NUTELS</h1>
          <p className="text-xl text-blue-100">
            National Union of Telecommunications Students (NUTELS) Nigeria
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Mission & Vision */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-blue-100 mb-4">
                <Target className="text-blue-600" size={24} />
              </div>
              <h2 className="text-2xl font-bold mb-4 text-blue-900">Our Mission</h2>
              <p className="text-gray-700 leading-relaxed">
                To foster unity and collaboration among telecommunication students nationwide, 
                promote academic excellence, research, and innovation in telecommunications and related fields, 
                and serve as a platform for capacity building, leadership development, and career advancement for members.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-green-100 mb-4">
                <Eye className="text-green-600" size={24} />
              </div>
              <h2 className="text-2xl font-bold mb-4 text-blue-900">Our Vision</h2>
              <p className="text-gray-700 leading-relaxed">
                To be the leading student organization representing telecommunications students in Nigeria, 
                recognized for excellence in education, innovation, and professional development, 
                while contributing to national development through collaboration with industry stakeholders.
              </p>
            </div>
          </div>
        </section>

        {/* Objectives */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">Aims and Objectives</h2>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start">
                <CheckCircle2 className="text-blue-900 mr-3 flex-shrink-0 mt-0.5" size={20} />
                <span>Foster unity and collaboration among telecommunication students nationwide.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="text-blue-900 mr-3 flex-shrink-0 mt-0.5" size={20} />
                <span>Promote academic excellence, research, and innovation in telecommunications and related fields.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="text-blue-900 mr-3 flex-shrink-0 mt-0.5" size={20} />
                <span>Serve as a platform for capacity building, leadership development, and career advancement for members.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="text-blue-900 mr-3 flex-shrink-0 mt-0.5" size={20} />
                <span>Organize academic conferences, workshops, hackathons, industrial visits, and mentorship programs.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="text-blue-900 mr-3 flex-shrink-0 mt-0.5" size={20} />
                <span>Represent the interests of members at institutional, national, and international forums.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="text-blue-900 mr-3 flex-shrink-0 mt-0.5" size={20} />
                <span>Collaborate with government bodies, industry stakeholders, and professional associations (e.g., NCC, IEEE, ITU) for national development.</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Identity */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">Identity</h2>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-purple-100 mb-4">
              <Award className="text-purple-600" size={24} />
            </div>
            <p className="text-gray-700 mb-4 leading-relaxed">
              The National Union of Telecommunications Students (NUTELS), also referred to as the National Union of Telecommunication Body (NUTB), 
              is a <strong>non-political, non-religious, non-profit</strong> academic and professional student body for all students studying 
              Telecommunications or related disciplines across institutions of higher learning in Nigeria.
            </p>
            <p className="text-gray-700 leading-relaxed">
              The Union may adopt a logo, motto, and anthem as symbols of its identity, to be approved by the National Executive Council.
            </p>
          </div>
        </section>

        {/* Organizational Structure */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">Organizational Structure</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-blue-100 mb-3">
                <Users className="text-blue-600" size={20} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-blue-900">National Executive Council (NEC)</h3>
              <p className="text-gray-700 leading-relaxed">
                The highest executive arm, responsible for policy formulation and national coordination.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-green-100 mb-3">
                <Building2 className="text-green-600" size={20} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-blue-900">Zonal Coordinating Committees (ZCCs)</h3>
              <p className="text-gray-700 leading-relaxed">
                Divided into geographical zones (North-West, South-East, etc.) for grassroots organization.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-purple-100 mb-3">
                <Building2 className="text-purple-600" size={20} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-blue-900">Institutional Chapters</h3>
              <p className="text-gray-700 leading-relaxed">
                Each institution shall have a local NUTELS chapter with elected officials.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-orange-100 mb-3">
                <Scale className="text-orange-600" size={20} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-blue-900">Senate/Representative Council</h3>
              <p className="text-gray-700 leading-relaxed">
                Composed of delegates from each institution and zone, serving as the legislative arm.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md md:col-span-2">
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-indigo-100 mb-3">
                <Users className="text-indigo-600" size={20} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-blue-900">Boards and Committees</h3>
              <p className="text-gray-700 leading-relaxed">
                May be constituted for elections, disciplinary issues, projects, or audits.
              </p>
            </div>
          </div>
        </section>

        {/* National Executive Positions */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">National Executive Positions</h2>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <p className="text-gray-700 mb-6 leading-relaxed">
              The National Executive Council includes the following positions:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="border-l-4 border-blue-900 pl-4">
                <h4 className="font-semibold text-gray-900">National President</h4>
              </div>
              <div className="border-l-4 border-blue-900 pl-4">
                <h4 className="font-semibold text-gray-900">National Vice President(s)</h4>
              </div>
              <div className="border-l-4 border-blue-900 pl-4">
                <h4 className="font-semibold text-gray-900">National Secretary-General</h4>
              </div>
              <div className="border-l-4 border-blue-900 pl-4">
                <h4 className="font-semibold text-gray-900">National Financial Secretary</h4>
              </div>
              <div className="border-l-4 border-blue-900 pl-4">
                <h4 className="font-semibold text-gray-900">National Public Relations Officer</h4>
              </div>
              <div className="border-l-4 border-blue-900 pl-4">
                <h4 className="font-semibold text-gray-900">National Director of Programs/Innovation</h4>
              </div>
            </div>
            <div className="mt-8 p-4 bg-blue-50 rounded-lg">
              <p className="text-sm text-gray-700 leading-relaxed">
                <strong>Note:</strong> All elected officers serve a one (1) year term, renewable once by re-election. 
                Elections are conducted at the annual national convention using democratic and transparent procedures.
              </p>
            </div>
          </div>
        </section>

        {/* Leadership Info Placeholder */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">Current National Executive Council</h2>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="text-center py-12 border-2 border-dashed border-gray-300 rounded-lg">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 mb-4">
                <Users className="text-gray-400" size={32} />
              </div>
              <p className="text-gray-500 text-lg mb-2">Executive Council Information</p>
              <p className="text-gray-400 text-sm">
                Information about current NEC members will be displayed here once available.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
