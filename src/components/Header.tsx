'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Header() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (!target.closest('.relative')) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className="bg-black/95 backdrop-blur-sm border-b border-gray-800 relative z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link
              href="/"
              className="text-2xl font-bold text-white font-logo tracking-wider"
            >
              INTEAR
            </Link>
          </div>
          <nav className="hidden md:flex space-x-8">
            <div className="relative">
              <button
                onClick={() =>
                  setOpenDropdown(
                    openDropdown === 'products' ? null : 'products'
                  )
                }
                className="text-gray-300 hover:text-white transition-colors flex items-center"
              >
                Products
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {openDropdown === 'products' && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-gray-900 border border-gray-700 rounded-lg shadow-2xl z-[9999] overflow-visible">
                  <a
                    href="https://rainy.intear.tech"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-gray-800 transition-colors"
                  >
                    <div className="font-semibold">Rainy</div>
                    <div className="text-sm text-gray-400">RPC & Indexing</div>
                  </a>
                  <a
                    href="https://wallet.intear.tech"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-gray-800 transition-colors"
                  >
                    <div className="font-semibold">Intear Wallet</div>
                    <div className="text-sm text-gray-400">Smart Wallet</div>
                  </a>
                  <a
                    href="https://t.me/BettearBot"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-gray-800 transition-colors"
                  >
                    <div className="font-semibold">Bettear Bot</div>
                    <div className="text-sm text-gray-400">Trading Bot</div>
                  </a>
                  <a
                    href="https://pumpit.intear.tech"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-gray-800 transition-colors"
                  >
                    <div className="font-semibold">PumpItBetty</div>
                    <div className="text-sm text-gray-400">Market Making</div>
                  </a>
                  <a
                    href="https://oracle.intear.tech"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-gray-800 transition-colors"
                  >
                    <div className="font-semibold">Intear Oracle</div>
                    <div className="text-sm text-gray-400">
                      Data Marketplace
                    </div>
                  </a>
                </div>
              )}
            </div>
            <div className="relative">
              <button
                onClick={() =>
                  setOpenDropdown(
                    openDropdown === 'resources' ? null : 'resources'
                  )
                }
                className="text-gray-300 hover:text-white transition-colors flex items-center"
              >
                Resources
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {openDropdown === 'resources' && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-gray-900 border border-gray-700 rounded-lg shadow-2xl z-[9999] overflow-visible">
                  <a
                    href="https://docs.intear.tech"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-gray-800 transition-colors"
                  >
                    <div className="font-semibold">Documentation</div>
                    <div className="text-sm text-gray-400">API & Guides</div>
                  </a>
                  <a
                    href="https://x.com/intelnear"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-gray-800 transition-colors"
                  >
                    <div className="font-semibold">X</div>
                    <div className="text-sm text-gray-400">Latest Updates</div>
                  </a>
                </div>
              )}
            </div>
            <Link
              href="/about"
              className="text-gray-300 hover:text-white transition-colors"
            >
              About
            </Link>
          </nav>
          <div className="flex items-center space-x-4">
            <a
              href="https://wallet.intear.tech"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors cursor-pointer"
            >
              Create Wallet
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
