import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Logo and Social Links */}
          <div className="md:col-span-1">
            <div className="mb-6">
              <div className="flex items-center space-x-3 mb-2">
                <Image
                  src="/favicon.svg"
                  alt="Intear Logo"
                  width={32}
                  height={32}
                  className="w-8 h-8"
                />
                <h5 className="text-2xl font-bold text-white font-logo tracking-wider">
                  INTEAR
                </h5>
              </div>
              <p className="text-gray-400 text-sm mt-2">
                Building the future of NEAR
              </p>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              <a
                href="https://x.com/intea_rs"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-200"
                aria-label="Follow us on X (Twitter)"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>

              <a
                href="https://t.me/intearchat"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-200"
                aria-label="Join our Telegram chat"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Products Column */}
          <div>
            <h6 className="text-white font-semibold mb-4">Products</h6>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://rainy.intear.tech"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Rainy Indexing
                </a>
              </li>
              <li>
                <a
                  href="https://wallet.intear.tech"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Intear Wallet
                </a>
              </li>
              <li>
                <a
                  href="https://t.me/BettearBot"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Bettear Bot
                </a>
              </li>
              <li>
                <a
                  href="https://pumpit.intear.tech"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  PumpItBetty
                </a>
              </li>
              <li>
                <a
                  href="https://oracle.intear.tech"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Intear Oracle
                </a>
              </li>
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h6 className="text-white font-semibold mb-4">Resources</h6>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://docs.intear.tech"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Docs
                </a>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <a
                  href="https://t.me/intearchange"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Changelog
                </a>
              </li>
              <li>
                <a
                  href="https://status.intear.tech"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Status
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/INTEARnear"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h6 className="text-white font-semibold mb-4">Company</h6>
            <ul className="space-y-3">
              <li>
                <a
                  href="/about"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="/careers"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="/brand"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Brand Kit
                </a>
              </li>
              <li>
                <a
                  href="https://t.me/slimytentacles"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Contact Sales
                </a>
              </li>
              <li>
                <a
                  href="https://t.me/slimytentacles"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Support
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <p className="text-gray-400 text-center text-sm">
            © 2025 Slimy Technologies, LLC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
