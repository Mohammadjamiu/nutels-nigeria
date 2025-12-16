import Link from 'next/link';
import { Users, BookOpen, GraduationCap, Award, Briefcase, Vote, CheckCircle2, UserPlus } from 'lucide-react';

export default function Membership() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Membership</h1>
          <p className="text-xl text-blue-100">
            Join a vibrant community of telecommunications students
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Membership Benefits */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">Membership Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-blue-100 mb-4">
                <Users className="text-blue-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Networking Opportunities</h3>
              <p className="text-gray-600 leading-relaxed">
                Connect with fellow telecommunications students, industry professionals, and alumni across Nigeria.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-green-100 mb-4">
                <BookOpen className="text-green-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Access to Resources</h3>
              <p className="text-gray-600 leading-relaxed">
                Get access to study materials, industry reports, career resources, and exclusive content.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-purple-100 mb-4">
                <GraduationCap className="text-purple-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Professional Development</h3>
              <p className="text-gray-600 leading-relaxed">
                Participate in workshops, training programs, and mentorship opportunities to advance your career.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-orange-100 mb-4">
                <Award className="text-orange-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Competitions & Events</h3>
              <p className="text-gray-600 leading-relaxed">
                Compete in hackathons, attend conferences, and participate in exclusive NUTELS events.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-red-100 mb-4">
                <Briefcase className="text-red-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Career Opportunities</h3>
              <p className="text-gray-600 leading-relaxed">
                Access job listings, internship opportunities, and career guidance from industry experts.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-indigo-100 mb-4">
                <Vote className="text-indigo-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Voting Rights</h3>
              <p className="text-gray-600 leading-relaxed">
                Regular members have voting rights and are eligible for elective offices within the Union.
              </p>
            </div>
          </div>
        </section>

        {/* Membership Categories */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">Membership Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md border-t-4 border-blue-900">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-lg bg-blue-100 mb-4">
                <GraduationCap className="text-blue-600" size={28} />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">Regular Members</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                All bona fide students of Telecommunication Engineering, Telecommunication Science, 
                or related fields in recognized tertiary institutions in Nigeria.
              </p>
              <ul className="space-y-2 text-gray-600 mb-6">
                <li className="flex items-start">
                  <CheckCircle2 className="text-blue-900 mr-2 flex-shrink-0 mt-0.5" size={20} />
                  <span>Students enrolled in diploma, ND, HND, or degree programs</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="text-blue-900 mr-2 flex-shrink-0 mt-0.5" size={20} />
                  <span>Voting rights in Union elections</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="text-blue-900 mr-2 flex-shrink-0 mt-0.5" size={20} />
                  <span>Eligible for elective offices</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="text-blue-900 mr-2 flex-shrink-0 mt-0.5" size={20} />
                  <span>Access to all Union programs and resources</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md border-t-4 border-green-900">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-lg bg-green-100 mb-4">
                <Award className="text-green-600" size={28} />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">Honorary Members</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Alumni, lecturers, or industry professionals recognized for their contributions to the Union.
              </p>
              <ul className="space-y-2 text-gray-600 mb-6">
                <li className="flex items-start">
                  <CheckCircle2 className="text-green-900 mr-2 flex-shrink-0 mt-0.5" size={20} />
                  <span>Alumni and industry professionals</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="text-green-900 mr-2 flex-shrink-0 mt-0.5" size={20} />
                  <span>Recognition for contributions to NUTELS</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="text-green-900 mr-2 flex-shrink-0 mt-0.5" size={20} />
                  <span>Access to Union events and resources</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 mr-2">—</span>
                  <span className="text-gray-400">No voting rights or eligibility for elective offices</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Eligibility */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">Eligibility</h2>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <p className="text-gray-700 mb-4 leading-relaxed">
              All bona fide students of Telecommunication Engineering, Telecommunication Science, or related fields 
              in recognized tertiary institutions in Nigeria are eligible for membership in NUTELS.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Related fields include but are not limited to: Electrical/Electronic Engineering with telecommunications focus, 
              Information and Communication Technology (ICT), Computer Engineering with networking specialization, 
              and other programs with significant telecommunications curriculum.
            </p>
          </div>
        </section>

        {/* How to Join */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">How to Join</h2>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-900 text-white rounded-full flex items-center justify-center font-bold mr-4">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">Check Your Eligibility</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Ensure you are a student of Telecommunications or a related field in a recognized tertiary institution in Nigeria.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-900 text-white rounded-full flex items-center justify-center font-bold mr-4">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">Contact Your Local Chapter</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Reach out to the NUTELS chapter at your institution. If no chapter exists, contact the National Secretariat.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-900 text-white rounded-full flex items-center justify-center font-bold mr-4">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">Complete Registration</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Fill out the membership registration form and submit required documents (student ID, proof of enrollment).
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-900 text-white rounded-full flex items-center justify-center font-bold mr-4">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">Pay Membership Dues</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Complete payment of membership dues as specified by your chapter or the National Secretariat.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Registration Form Placeholder */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">Become a Member</h2>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="text-center py-12 border-2 border-dashed border-gray-300 rounded-lg">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 mb-4">
                <UserPlus className="text-gray-400" size={32} />
              </div>
              <p className="text-gray-500 text-lg mb-2 font-medium">Membership Registration</p>
              <p className="text-gray-400 text-sm mb-6">
                Registration form for Undergraduate, Graduate, and Fellow memberships will be available here.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-blue-900 text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition font-semibold">
                  Register as Undergraduate
                </button>
                <button className="bg-green-900 text-white px-6 py-3 rounded-lg hover:bg-green-800 transition font-semibold">
                  Register as Graduate
                </button>
                <button className="bg-purple-900 text-white px-6 py-3 rounded-lg hover:bg-purple-800 transition font-semibold">
                  Register as Fellow
                </button>
              </div>
              <p className="text-gray-400 text-xs mt-4">
                Registration functionality coming soon
              </p>
            </div>
          </div>
        </section>

        {/* Membership Rights */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">Membership Rights</h2>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start">
                <CheckCircle2 className="text-blue-900 mr-3 flex-shrink-0 mt-0.5" size={20} />
                <span>Regular members shall have voting rights and be eligible for elective offices.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="text-blue-900 mr-3 flex-shrink-0 mt-0.5" size={20} />
                <span>Access to all Union programs, events, and resources.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="text-blue-900 mr-3 flex-shrink-0 mt-0.5" size={20} />
                <span>Participation in Union activities, competitions, and conferences.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="text-blue-900 mr-3 flex-shrink-0 mt-0.5" size={20} />
                <span>Representation of interests at institutional, national, and international forums.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="text-blue-900 mr-3 flex-shrink-0 mt-0.5" size={20} />
                <span>Honorary members shall not vote or be voted for, but may participate in Union activities.</span>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}
