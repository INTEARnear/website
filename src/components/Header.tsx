'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (
        !target.closest('.mobile-menu-container') &&
        !target.closest('.mobile-menu-button')
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setOpenDropdown(null); // Close any open dropdowns
  };

  const toggleDropdown = (dropdown: string) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setOpenDropdown(null);
  };

  return (
    <header className="bg-black/95 backdrop-blur-sm border-b border-gray-800 relative z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link
              href="/"
              className="text-2xl font-bold text-white font-logo tracking-wider flex items-center space-x-3"
              aria-label="Intear - Home"
            >
              <Image
                src="/favicon.svg"
                alt="Intear Logo"
                width={32}
                height={32}
                className="w-8 h-8"
              />
              <span>INTEAR</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav
            className="hidden md:flex space-x-8"
            role="navigation"
            aria-label="Main navigation"
          >
            <div className="relative">
              <button
                onClick={() => toggleDropdown('products')}
                className="text-gray-300 hover:text-white transition-colors flex items-center py-2 px-3 rounded-md focus:outline-none"
                aria-expanded={openDropdown === 'products'}
                aria-haspopup="true"
                id="products-menu-button"
              >
                Products
                <svg
                  className={`w-4 h-4 ml-1 transition-transform ${openDropdown === 'products' ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
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
                <div
                  className="absolute top-full left-0 mt-2 w-64 bg-gray-900 border border-gray-700 rounded-lg shadow-2xl z-[9999] overflow-visible"
                  role="menu"
                  aria-labelledby="products-menu-button"
                >
                  <a
                    href="https://rainy.intear.tech"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-gray-800 transition-colors focus:outline-none focus:bg-gray-800 focus:text-white"
                    role="menuitem"
                  >
                    <div className="font-semibold">Rainy</div>
                    <div className="text-sm text-gray-400">RPC & Indexing</div>
                  </a>
                  <a
                    href="https://wallet.intear.tech"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-gray-800 transition-colors focus:outline-none focus:bg-gray-800 focus:text-white"
                    role="menuitem"
                  >
                    <div className="font-semibold">Intear Wallet</div>
                    <div className="text-sm text-gray-400">Smart Wallet</div>
                  </a>
                  <a
                    href="https://t.me/BettearBot"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-gray-800 transition-colors focus:outline-none focus:bg-gray-800 focus:text-white"
                    role="menuitem"
                  >
                    <div className="font-semibold">Bettear Bot</div>
                    <div className="text-sm text-gray-400">Trading Bot</div>
                  </a>
                  <a
                    href="https://pumpit.intear.tech"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-gray-800 transition-colors focus:outline-none focus:bg-gray-800 focus:text-white"
                    role="menuitem"
                  >
                    <div className="font-semibold">PumpItBetty</div>
                    <div className="text-sm text-gray-400">Market Making</div>
                  </a>
                  <a
                    href="https://oracle.intear.tech"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-gray-800 transition-colors focus:outline-none focus:bg-gray-800 focus:text-white"
                    role="menuitem"
                  >
                    <div className="font-semibold">Intear Oracle</div>
                    <div className="text-sm text-gray-400">
                      Data Marketplace
                    </div>
                  </a>
                  <a
                    href="/validator"
                    className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-gray-800 transition-colors focus:outline-none focus:bg-gray-800 focus:text-white"
                    role="menuitem"
                  >
                    <div className="font-semibold">Validator</div>
                    <div className="text-sm text-gray-400">NEAR Validation</div>
                  </a>
                </div>
              )}
            </div>
            <div className="relative">
              <button
                onClick={() => toggleDropdown('resources')}
                className="text-gray-300 hover:text-white transition-colors flex items-center py-2 px-3 rounded-md focus:outline-none"
                aria-expanded={openDropdown === 'resources'}
                aria-haspopup="true"
                id="resources-menu-button"
              >
                Resources
                <svg
                  className={`w-4 h-4 ml-1 transition-transform ${openDropdown === 'resources' ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
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
                <div
                  className="absolute top-full left-0 mt-2 w-64 bg-gray-900 border border-gray-700 rounded-lg shadow-2xl z-[9999] overflow-visible"
                  role="menu"
                  aria-labelledby="resources-menu-button"
                >
                  <a
                    href="https://docs.intear.tech"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-gray-800 transition-colors focus:outline-none focus:bg-gray-800 focus:text-white"
                    role="menuitem"
                  >
                    <div className="font-semibold">Documentation</div>
                    <div className="text-sm text-gray-400">API & Guides</div>
                  </a>
                  <Link
                    href="/blog"
                    className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-gray-800 transition-colors focus:outline-none focus:bg-gray-800 focus:text-white"
                    role="menuitem"
                  >
                    <div className="font-semibold">Blog</div>
                    <div className="text-sm text-gray-400">
                      Insights & Updates
                    </div>
                  </Link>
                  <a
                    href="https://t.me/intearchange"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-gray-800 transition-colors focus:outline-none focus:bg-gray-800 focus:text-white"
                    role="menuitem"
                  >
                    <div className="font-semibold">Changelog</div>
                    <div className="text-sm text-gray-400">Product Updates</div>
                  </a>
                  <a
                    href="https://status.intear.tech"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-gray-800 transition-colors focus:outline-none focus:bg-gray-800 focus:text-white"
                    role="menuitem"
                  >
                    <div className="font-semibold">Status</div>
                    <div className="text-sm text-gray-400">
                      Uptime and incidents
                    </div>
                  </a>
                  <a
                    href="https://github.com/INTEARnear"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-gray-800 transition-colors focus:outline-none focus:bg-gray-800 focus:text-white"
                    role="menuitem"
                  >
                    <div className="font-semibold">GitHub</div>
                    <div className="text-sm text-gray-400">
                      Our Open Source Repositories
                    </div>
                  </a>
                </div>
              )}
            </div>
            <Link
              href="/about"
              className="text-gray-300 hover:text-white transition-colors py-2 px-3 rounded-md focus:outline-none"
            >
              About
            </Link>
          </nav>

          {/* Desktop CTA and Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            <a
              href="https://wallet.intear.tech"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:block bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors focus:outline-none"
              aria-label="Create your NEAR wallet"
            >
              Create Wallet
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden p-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-black mobile-menu-button"
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
              aria-label={
                isMobileMenuOpen ? 'Close main menu' : 'Open main menu'
              }
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="md:hidden fixed inset-0 z-40 bg-black bg-opacity-50"
          aria-hidden="true"
        >
          <div className="mobile-menu-container fixed inset-y-0 right-0 max-w-sm w-full bg-gray-900 shadow-xl h-full min-h-screen">
            <div className="flex flex-col h-full min-h-screen">
              <div className="flex items-center justify-between p-4 border-b border-gray-800 flex-shrink-0">
                <Link
                  href="/"
                  onClick={closeMobileMenu}
                  className="flex items-center space-x-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 rounded-md"
                  aria-label="Intear - Home"
                >
                  <Image
                    src="/favicon.svg"
                    alt="Intear Logo"
                    width={32}
                    height={32}
                    className="w-8 h-8"
                  />
                  <span className="text-2xl font-bold text-white font-logo tracking-wider">
                    INTEAR
                  </span>
                </Link>
                <button
                  onClick={toggleMobileMenu}
                  className="p-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  aria-label="Close menu"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              {/* Mobile Navigation */}
              <nav
                className="flex-1 overflow-y-auto p-4 min-h-0"
                id="mobile-menu"
                role="navigation"
                aria-label="Mobile navigation"
              >
                <div className="space-y-4">
                  {/* Products Section */}
                  <div>
                    <button
                      onClick={() => toggleDropdown('mobile-products')}
                      className="w-full flex items-center justify-between py-3 px-4 text-left text-white font-semibold bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      aria-expanded={openDropdown === 'mobile-products'}
                    >
                      Products
                      <svg
                        className={`w-4 h-4 transition-transform ${openDropdown === 'mobile-products' ? 'rotate-180' : ''}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                    {openDropdown === 'mobile-products' && (
                      <div className="mt-2 space-y-2 pl-4">
                        <a
                          href="https://rainy.intear.tech"
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={closeMobileMenu}
                          className="block py-3 px-4 text-gray-300 hover:text-white hover:bg-gray-800 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                          <div className="font-medium">Rainy</div>
                          <div className="text-sm text-gray-400">
                            RPC & Indexing
                          </div>
                        </a>
                        <a
                          href="https://wallet.intear.tech"
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={closeMobileMenu}
                          className="block py-3 px-4 text-gray-300 hover:text-white hover:bg-gray-800 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                          <div className="font-medium">Intear Wallet</div>
                          <div className="text-sm text-gray-400">
                            Smart Wallet
                          </div>
                        </a>
                        <a
                          href="https://t.me/BettearBot"
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={closeMobileMenu}
                          className="block py-3 px-4 text-gray-300 hover:text-white hover:bg-gray-800 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                          <div className="font-medium">Bettear Bot</div>
                          <div className="text-sm text-gray-400">
                            Trading Bot
                          </div>
                        </a>
                        <a
                          href="https://pumpit.intear.tech"
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={closeMobileMenu}
                          className="block py-3 px-4 text-gray-300 hover:text-white hover:bg-gray-800 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                          <div className="font-medium">PumpItBetty</div>
                          <div className="text-sm text-gray-400">
                            Market Making
                          </div>
                        </a>
                        <a
                          href="https://oracle.intear.tech"
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={closeMobileMenu}
                          className="block py-3 px-4 text-gray-300 hover:text-white hover:bg-gray-800 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                          <div className="font-medium">Intear Oracle</div>
                          <div className="text-sm text-gray-400">
                            Data Marketplace
                          </div>
                        </a>
                        <a
                          href="/validator"
                          onClick={closeMobileMenu}
                          className="block py-3 px-4 text-gray-300 hover:text-white hover:bg-gray-800 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                          <div className="font-medium">Validator</div>
                          <div className="text-sm text-gray-400">
                            NEAR Validation
                          </div>
                        </a>
                      </div>
                    )}
                  </div>

                  {/* Resources Section */}
                  <div>
                    <button
                      onClick={() => toggleDropdown('mobile-resources')}
                      className="w-full flex items-center justify-between py-3 px-4 text-left text-white font-semibold bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      aria-expanded={openDropdown === 'mobile-resources'}
                    >
                      Resources
                      <svg
                        className={`w-4 h-4 transition-transform ${openDropdown === 'mobile-resources' ? 'rotate-180' : ''}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                    {openDropdown === 'mobile-resources' && (
                      <div className="mt-2 space-y-2 pl-4">
                        <a
                          href="https://docs.intear.tech"
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={closeMobileMenu}
                          className="block py-3 px-4 text-gray-300 hover:text-white hover:bg-gray-800 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                          <div className="font-medium">Documentation</div>
                          <div className="text-sm text-gray-400">
                            API & Guides
                          </div>
                        </a>
                        <Link
                          href="/blog"
                          onClick={closeMobileMenu}
                          className="block py-3 px-4 text-gray-300 hover:text-white hover:bg-gray-800 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                          <div className="font-medium">Blog</div>
                          <div className="text-sm text-gray-400">
                            Insights & Updates
                          </div>
                        </Link>
                        <a
                          href="https://t.me/intearchange"
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={closeMobileMenu}
                          className="block py-3 px-4 text-gray-300 hover:text-white hover:bg-gray-800 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                          <div className="font-medium">Changelog</div>
                          <div className="text-sm text-gray-400">
                            Product Updates
                          </div>
                        </a>
                        <a
                          href="https://status.intear.tech"
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={closeMobileMenu}
                          className="block py-3 px-4 text-gray-300 hover:text-white hover:bg-gray-800 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                          <div className="font-medium">Status</div>
                          <div className="text-sm text-gray-400">
                            Uptime and incidents
                          </div>
                        </a>
                        <a
                          href="https://github.com/INTEARnear"
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={closeMobileMenu}
                          className="block py-3 px-4 text-gray-300 hover:text-white hover:bg-gray-800 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                          <div className="font-medium">GitHub</div>
                          <div className="text-sm text-gray-400">
                            Our Open Source Repositories
                          </div>
                        </a>
                      </div>
                    )}
                  </div>

                  {/* About Link */}
                  <Link
                    href="/about"
                    onClick={closeMobileMenu}
                    className="block py-3 px-4 text-white font-semibold bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    About
                  </Link>
                </div>

                {/* Mobile CTA */}
                <div className="mt-8 pt-8 border-t border-gray-800">
                  <a
                    href="https://wallet.intear.tech"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={closeMobileMenu}
                    className="block w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center focus:outline-none focus:ring-2 focus:ring-blue-500"
                    aria-label="Create your NEAR wallet"
                  >
                    Create Wallet
                  </a>
                </div>
              </nav>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
