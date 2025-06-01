'use client';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function About() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />

      {/* Main Content */}
      <main className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-8 font-roboto">
              About Intear
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Building the infrastructure that makes Web3 feel better than Web2
            </p>
          </div>

          <div className="prose prose-lg prose-invert max-w-none">
            <div className="bg-gray-900/50 p-8 rounded-2xl border border-gray-800 mb-8">
              <h2 className="text-3xl font-bold mb-6 text-white">Our Mission</h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-4">
                Intear is dedicated to building the best infrastructure on the best blockchain
                for the best applications.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                Our goals:
                <ul className="list-disc list-inside">
                    <li>
                        Build the best wallet in web3 by the end of 2025
                    </li>
                    <li>
                        Become the best web3 data platform
                    </li>
                    <li>
                        Make every app on NEAR fast and accessible
                    </li>
                </ul>
              </p>
            </div>

            <div className="bg-gray-900/50 p-8 rounded-2xl border border-gray-800 mb-8">
              <h2 className="text-3xl font-bold mb-6 text-white">What We Do</h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-4">
                We provide the fastest and most reliable blockchain infrastructure on NEAR Protocol, 
                including RPC services, real-time indexing, oracle networks, and trading tools.
                <br />
                <br />
                As well as user-facing products like a wallet or trading tools.
              </p>
            </div>

            <div className="bg-gray-900/50 p-8 rounded-2xl border border-gray-800">
              <h2 className="text-3xl font-bold mb-6 text-white">Contact Us</h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-4">
                Have questions or want to collaborate? We&apos;d love to hear from you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://t.me/intearchat"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center"
                >
                  Join our Telegram
                </a>
                <a
                  href="https://t.me/slimytentacles"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-600 transition-colors text-center"
                >
                  Contact us
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
} 