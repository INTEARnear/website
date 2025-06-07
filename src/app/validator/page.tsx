'use client';

import { useState } from 'react';

export default function ValidatorPage() {
  const [copied, setCopied] = useState(false);
  const validatorId = 'intear.pool.near';

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(validatorId);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 font-roboto tracking-wider">
            VALIDATOR
          </h1>
          <p className="text-xl text-gray-400 mb-12 max-w-3xl mx-auto">
            Delegate to our high-performance NEAR Protocol validator and earn
            $PretTEAR tokens.
          </p>

          <div className="bg-gray-900 border border-gray-800 rounded-lg p-12 max-w-4xl mx-auto">
            <div className="mb-8">
              <svg
                className="w-16 h-16 text-blue-500 mx-auto mb-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>

              <h2 className="text-3xl font-bold text-white mb-4">
                Stake with Intear
              </h2>

              <div className="bg-gray-800 border border-gray-700 rounded-lg p-4 mb-6 max-w-md mx-auto">
                <div className="flex items-center justify-between">
                  <span className="text-gray-300 font-mono text-sm md:text-base">
                    {validatorId}
                  </span>
                  <button
                    onClick={handleCopy}
                    className="ml-3 px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white text-sm rounded transition-colors flex items-center"
                  >
                    {copied ? (
                      <>
                        <svg
                          className="w-4 h-4 mr-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        Copied!
                      </>
                    ) : (
                      <>
                        <svg
                          className="w-4 h-4 mr-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                          />
                        </svg>
                        Copy
                      </>
                    )}
                  </button>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Validator Fee
                  </h3>
                  <div className="text-3xl font-bold text-blue-400">5%</div>
                  <p className="text-gray-400 text-sm mt-2">
                    Low fee for high stability
                  </p>
                </div>

                <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Token Rewards
                  </h3>
                  <div className="text-2xl font-bold text-purple-400">
                    $PretTEAR
                  </div>
                  <p className="text-gray-400 text-sm mt-2">
                    Earn tokens that will convert to $TEAR on TGE
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-purple-900/20 to-blue-900/20 border border-purple-500/20 rounded-lg p-6 mb-8">
                <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                  Token Utility
                </h3>
                <p className="text-gray-300 mb-4">
                  Delegators earn $PretTEAR tokens in addition to regular
                  staking rewards. These tokens will be converted to $TEAR
                  tokens in the future. It&apos;s like a pre-sale, but with no
                  risk of losing your money, just a 5% fee.
                </p>
              </div>

              <div className="space-y-4 text-left mb-8">
                <h3 className="text-xl font-semibold text-white text-center mb-4">
                  Why choose Intear Pool?
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></div>
                    <span className="text-gray-300">
                      Ran by established and trusted NEAR-native team
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></div>
                    <span className="text-gray-300">
                      No downtime since launch
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></div>
                    <span className="text-gray-300">
                      Competitive 5% validator fee
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></div>
                    <span className="text-gray-300">
                      Slime will be grateful
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-gray-800">
              <p className="text-sm text-gray-500 mb-4">
                Ready to start earning with our validator?
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                Stake in your favorite wallet using intear.pool.near
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
