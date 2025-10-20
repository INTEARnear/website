export default function CareersPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 font-roboto tracking-wider">
            CAREERS
          </h1>
          <p className="text-xl text-gray-400 mb-12 max-w-3xl mx-auto">
            Join us in building the future of decentralized infrastructure on
            NEAR.
          </p>

          {/* Open Positions */}
          <div className="bg-gray-900 border border-gray-800 rounded-lg p-8 mb-12">
            <h2 className="text-3xl font-bold mb-6">Open Positions</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-blue-400 mb-3">
                  Senior Rust Engineer
                </h3>
                <p className="text-gray-300">
                  Build high-performance blockchain infrastructure, smart
                  contracts, and backend services.
                </p>
              </div>
            </div>
          </div>

          {/* Projects */}
          <div className="bg-gray-900 border border-gray-800 rounded-lg p-8 mb-12">
            <h2 className="text-3xl font-bold mb-6">
              Projects You&apos;ll Be Working On
            </h2>
            <div className="grid gap-6 text-left">
              <div className="bg-gray-800 rounded-lg p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-semibold text-blue-400">
                    Intear Wallet
                  </h3>
                  <a
                    href="https://github.com/INTEARnear/wallet"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </a>
                </div>
                <p className="text-gray-300">
                  Frontend written in Rust / Leptos / Wasm, with some Rust
                  microservices
                </p>
              </div>

              <div className="bg-gray-800 rounded-lg p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-semibold text-blue-400">
                    Intear Smart Wallet
                  </h3>
                  <a
                    href="https://github.com/INTEARnear/wallet-contract"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </a>
                </div>
                <p className="text-gray-300">
                  Smart contract for the wallet written in Rust
                </p>
              </div>

              <div className="bg-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-blue-400 mb-3">
                  Telegram Trading Bot
                </h3>
                <p className="text-gray-300">
                  Written in Rust using Teloxide, not open source
                </p>
              </div>

              <div className="bg-gray-800 rounded-lg p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-semibold text-blue-400">
                    Telegram AI Moderator
                  </h3>
                  <a
                    href="https://github.com/INTEARnear/Tear/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </a>
                </div>
                <p className="text-gray-300">
                  Written in Rust using Teloxide and different LLMs
                </p>
              </div>

              <div className="bg-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-blue-400 mb-3">
                  Imminent.build
                </h3>
                <p className="text-gray-300">
                  Social network for builders written in Next.js, not open
                  source
                </p>
              </div>

              <div className="bg-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-blue-400 mb-3">
                  Infrastructure Projects
                </h3>
                <p className="text-gray-300">
                  Indexers, Rainy, APIs, custom RPC methods, DEX aggregator
                  router, and many small &quot;build once, works forever&quot;
                  type projects, written in Rust
                </p>
              </div>

              <div className="bg-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-blue-400 mb-3">
                  Random Projects
                </h3>
                <p className="text-gray-300">
                  DEX aggregator frontend? Staking widget that works with any
                  wallet? Shade Agent oracle? We love experimenting and building
                  small useful tools
                </p>
              </div>
            </div>
          </div>

          {/* Advantages */}
          <div className="bg-gray-900 border border-gray-800 rounded-lg p-8 mb-12">
            <h2 className="text-3xl font-bold mb-6">Why Work With Us</h2>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="font-semibold text-white mb-1">
                    Flexible Work Areas
                  </h3>
                  <p className="text-gray-300">
                    Work on any projects you like from our diverse portfolio
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="font-semibold text-white mb-1">
                    Fully Remote
                  </h3>
                  <p className="text-gray-300">
                    Work from anywhere with flexible hours
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="font-semibold text-white mb-1">
                    Real Products
                  </h3>
                  <p className="text-gray-300">
                    Build real apps for real users, not half-baked MVPs just to
                    get a grant
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="font-semibold text-white mb-1">
                    TEAR Token Allocation
                  </h3>
                  <p className="text-gray-300">
                    Participate in the success of our ecosystem
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Requirements */}
          <div className="bg-gray-900 border border-gray-800 rounded-lg p-8 mb-12">
            <h2 className="text-3xl font-bold mb-6">Requirements</h2>
            <div className="text-left">
              <div className="flex items-start space-x-3 mb-4">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-300">
                  Active GitHub account with contributions to open-source NEAR
                  mainnet projects
                </p>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div className="bg-gray-900 border border-gray-800 rounded-lg p-8">
            <h2 className="text-3xl font-bold mb-6">Ready to Join?</h2>
            <p className="text-gray-400 mb-6">
              Interested in building the future of decentralized infrastructure?
            </p>
            <a
              href="https://t.me/slimytentacles"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Get in Touch
              <svg
                className="w-4 h-4 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
