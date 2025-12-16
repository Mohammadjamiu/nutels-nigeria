'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="relative w-12 h-12">
              <Image
                src="/nutels-logo.png"
                alt="NUTELS Logo"
                fill
                className="object-contain"
                priority
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold text-blue-900">NUTELS</span>
              <span className="text-xs text-gray-600">Nigeria</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-blue-900 font-medium transition-colors text-sm">
              Home
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-blue-900 font-medium transition-colors text-sm">
              About
            </Link>
            <Link href="/programs" className="text-gray-700 hover:text-blue-900 font-medium transition-colors text-sm">
              Programs & Events
            </Link>
            <Link href="/membership" className="text-gray-700 hover:text-blue-900 font-medium transition-colors text-sm">
              Membership
            </Link>
            <Link href="/news" className="text-gray-700 hover:text-blue-900 font-medium transition-colors text-sm">
              News
            </Link>
            <Link href="/chapters" className="text-gray-700 hover:text-blue-900 font-medium transition-colors text-sm">
              Chapters
            </Link>
            <Link href="/resources" className="text-gray-700 hover:text-blue-900 font-medium transition-colors text-sm">
              Resources
            </Link>
            <Link href="/gallery" className="text-gray-700 hover:text-blue-900 font-medium transition-colors text-sm">
              Gallery
            </Link>
            <Link href="/contact" className="bg-blue-900 text-white px-5 py-2 rounded-lg hover:bg-blue-800 transition font-medium text-sm">
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-700 focus:outline-none p-2"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <Link href="/" className="block px-3 py-2 text-gray-700 hover:bg-gray-50 rounded">Home</Link>
            <Link href="/about" className="block px-3 py-2 text-gray-700 hover:bg-gray-50 rounded">About</Link>
            <Link href="/programs" className="block px-3 py-2 text-gray-700 hover:bg-gray-50 rounded">Programs & Events</Link>
            <Link href="/membership" className="block px-3 py-2 text-gray-700 hover:bg-gray-50 rounded">Membership</Link>
            <Link href="/news" className="block px-3 py-2 text-gray-700 hover:bg-gray-50 rounded">News</Link>
            <Link href="/chapters" className="block px-3 py-2 text-gray-700 hover:bg-gray-50 rounded">Chapters</Link>
            <Link href="/resources" className="block px-3 py-2 text-gray-700 hover:bg-gray-50 rounded">Resources</Link>
            <Link href="/gallery" className="block px-3 py-2 text-gray-700 hover:bg-gray-50 rounded">Gallery</Link>
            <Link href="/contact" className="block px-3 py-2 bg-blue-900 text-white rounded text-center">Contact</Link>
          </div>
        )}
      </div>
    </nav>
  );
}
