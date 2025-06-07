'use client';

import Image from 'next/image';

export default function BrandPage() {
  const handleDownload = (fileName: string) => {
    const link = document.createElement('a');
    link.href = `/${fileName}`;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div
      className="min-h-screen text-white"
      style={{ backgroundColor: '#000000' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 font-roboto tracking-wider">
            BRAND KIT
          </h1>
          <p className="text-xl text-gray-400 mb-12 max-w-3xl mx-auto">
            Official brand assets, guidelines, and resources.
          </p>

          {/* Main Color Section */}
          <div className="mb-12">
            <div className="bg-gray-900 border border-gray-800 rounded-lg p-8 max-w-2xl mx-auto">
              <h2 className="text-2xl font-semibold text-white mb-6">
                Brand Colors
              </h2>
              <div className="flex items-center justify-center space-x-8">
                <div className="text-center">
                  <div
                    className="w-24 h-24 rounded-lg border-2 border-gray-600 mx-auto mb-3"
                    style={{ backgroundColor: '#19a7fb' }}
                  ></div>
                  <h3 className="text-lg font-semibold text-white">
                    Brand: Teardrop Blue
                  </h3>
                  <p className="text-gray-400 font-mono text-sm">#19a7fb</p>
                  <p className="text-gray-400 font-mono text-sm">
                    RGB(25, 167, 251)
                  </p>
                </div>
                <div className="text-center">
                  <div
                    className="w-24 h-24 rounded-lg border-2 border-gray-600 mx-auto mb-3"
                    style={{ backgroundColor: '#000000' }}
                  ></div>
                  <h3 className="text-lg font-semibold text-white">
                    Background: Black
                  </h3>
                  <p className="text-gray-400 font-mono text-sm">#000000</p>
                  <p className="text-gray-400 font-mono text-sm">
                    RGB(0, 0, 0)
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Intear Logo Section */}
          <div className="mb-12">
            <div className="bg-gray-900 border border-gray-800 rounded-lg p-8 max-w-4xl mx-auto">
              <h2 className="text-2xl font-semibold text-white mb-6">
                Intear Logo
              </h2>

              <div className="grid md:grid-cols-2 gap-8">
                {/* Blue Logo */}
                <div
                  className="rounded-lg p-8 relative overflow-hidden"
                  style={{
                    background:
                      'linear-gradient(to right, white 50%, black 50%)',
                  }}
                >
                  <div className="text-center mb-4 relative z-10">
                    <Image
                      src="/logo-blue.svg"
                      alt="Intear Logo Blue"
                      width={64}
                      height={64}
                      className="h-16 mx-auto mb-4"
                    />
                    <p
                      className="font-semibold"
                      style={{
                        background:
                          'linear-gradient(to right, black 50%, white 50%)',
                        WebkitBackgroundClip: 'text',
                        backgroundClip: 'text',
                        color: 'transparent',
                      }}
                    >
                      For Light / Black Backgrounds
                    </p>
                  </div>
                  <div className="flex space-x-2 justify-center relative z-10">
                    <button
                      onClick={() => handleDownload('logo-blue.svg')}
                      className="px-4 py-2 bg-blue-600 text-white rounded text-sm hover:bg-blue-700 transition-colors cursor-pointer inline-flex items-center space-x-2"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 4v12m0 0l-4-4m4 4l4-4"
                        />
                      </svg>
                      <span>SVG</span>
                    </button>
                    <button
                      onClick={() => handleDownload('logo-blue.png')}
                      className="px-4 py-2 bg-blue-600 text-white rounded text-sm hover:bg-blue-700 transition-colors cursor-pointer inline-flex items-center space-x-2"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 4v12m0 0l-4-4m4 4l4-4"
                        />
                      </svg>
                      <span>PNG</span>
                    </button>
                  </div>
                </div>

                {/* White Logo */}
                <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg p-8">
                  <div className="text-center mb-4">
                    <Image
                      src="/logo-white.svg"
                      alt="Intear Logo White"
                      width={64}
                      height={64}
                      className="h-16 mx-auto mb-4"
                    />
                    <p className="text-white font-semibold">
                      For Colorful Backgrounds
                    </p>
                  </div>
                  <div className="flex space-x-2 justify-center">
                    <button
                      onClick={() => handleDownload('logo-white.svg')}
                      className="px-4 py-2 bg-white text-gray-800 rounded text-sm hover:bg-gray-100 transition-colors cursor-pointer inline-flex items-center space-x-2"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 4v12m0 0l-4-4m4 4l4-4"
                        />
                      </svg>
                      <span>SVG</span>
                    </button>
                    <button
                      onClick={() => handleDownload('logo-white.png')}
                      className="px-4 py-2 bg-white text-gray-800 rounded text-sm hover:bg-gray-100 transition-colors cursor-pointer inline-flex items-center space-x-2"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 4v12m0 0l-4-4m4 4l4-4"
                        />
                      </svg>
                      <span>PNG</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Intear Wallet Logo Section */}
          <div className="mb-12">
            <div className="bg-gray-900 border border-gray-800 rounded-lg p-8 max-w-2xl mx-auto">
              <h2 className="text-2xl font-semibold text-white mb-6">
                Intear Wallet Logo
              </h2>

              <div
                className="rounded-lg p-8 mb-6 relative overflow-hidden"
                style={{
                  background: 'linear-gradient(to right, white 50%, black 50%)',
                }}
              >
                <div className="text-center relative z-10">
                  <Image
                    src="/wallet-logo.svg"
                    alt="Intear Wallet Logo"
                    width={64}
                    height={64}
                    className="h-16 mx-auto mb-4"
                  />
                </div>
              </div>

              <div className="flex space-x-2 justify-center">
                <button
                  onClick={() => handleDownload('wallet-logo.svg')}
                  className="px-4 py-2 bg-blue-600 text-white rounded text-sm hover:bg-blue-700 transition-colors cursor-pointer inline-flex items-center space-x-2"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 4v12m0 0l-4-4m4 4l4-4"
                    />
                  </svg>
                  <span>Download SVG</span>
                </button>
                <button
                  onClick={() => handleDownload('wallet-logo.png')}
                  className="px-4 py-2 bg-blue-600 text-white rounded text-sm hover:bg-blue-700 transition-colors cursor-pointer inline-flex items-center space-x-2"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 4v12m0 0l-4-4m4 4l4-4"
                    />
                  </svg>
                  <span>Download PNG</span>
                </button>
              </div>
            </div>
          </div>

          {/* Betty Mascot Section */}
          <div className="mb-12">
            <div className="bg-gray-900 border border-gray-800 rounded-lg p-8 max-w-2xl mx-auto">
              <h2 className="text-2xl font-semibold text-white mb-6">
                Betty - Our Mascot
              </h2>

              <div className="bg-white rounded-lg p-8 mb-6">
                <div className="text-center">
                  <Image
                    src="/betty.webp"
                    alt="Betty - Intear Mascot"
                    width={256}
                    height={256}
                    className="h-64 mx-auto mb-4 rounded-lg"
                  />
                </div>
              </div>

              <div className="text-center">
                <a
                  href="https://drive.google.com/drive/folders/1nxpm5dDBGs8ZkH8WcJCQ0QbErxixJrJT?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors cursor-pointer"
                >
                  View Betty Assets
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

          {/* Typography Section */}
          <div className="mb-12">
            <div className="bg-gray-900 border border-gray-800 rounded-lg p-8 max-w-2xl mx-auto">
              <h2 className="text-2xl font-semibold text-white mb-6">
                Typography
              </h2>

              <div className="text-center">
                <h3 className="text-4xl font-bold mb-4 font-logo">INTEAR</h3>
                <p className="text-gray-400 mb-2">Funnel Display ExtraBold</p>
                <p className="text-gray-500 text-sm mb-6">
                  Primary brand font for logos and headings
                </p>

                <a
                  href="https://fonts.google.com/specimen/Funnel+Display?preview.layout=grid"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  View on Google Fonts
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

          {/* Usage Guidelines */}
          <div className="mb-12">
            <div className="bg-gray-900 border border-gray-800 rounded-lg p-8 max-w-2xl mx-auto">
              <h2 className="text-2xl font-semibold text-white mb-6">
                Usage Guidelines
              </h2>

              <div className="space-y-4 text-left">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-300">
                    Use the blue logo on light and dark backgrounds, and white
                    logo on colorful backgrounds
                  </span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-300">
                    Maintain adequate clear space around the logo
                  </span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-300">
                    For new Betty content, the recommended way is to generate
                    images with gpt-image-1 since Betty is an AI agent, but any
                    other AI model works too. Human art is acceptable as well.
                  </span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-300">
                    Anyone is free to post their AI generations of Betty without
                    permission
                  </span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-300">
                    Don&apos;t stretch, rotate, or modify the logo proportions
                  </span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-300">
                    Don&apos;t use the logo on backgrounds with insufficient
                    contrast
                  </span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-300">
                    Don&apos;t use the Intear Wallet logo to represent the
                    entire Intear brand, or Intear logo to represent the Intear
                    Wallet
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="bg-gray-900 border border-gray-800 rounded-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold text-white mb-4">
              Need Help?
            </h3>
            <p className="text-gray-400 mb-6">
              For partnerships, media inquiries, or custom brand asset requests,
              reach out to our team.
            </p>

            <a
              href="https://t.me/slimytentacles"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Contact Us
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
