import { getAllPosts } from './data';
import Image from 'next/image';

export default function BlogPage() {
  const blogPosts = getAllPosts();

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 font-roboto tracking-wider">
            BLOG
          </h1>
          <p className="text-xl text-gray-400 mb-12 max-w-3xl mx-auto">
            Insights, updates, and stories from the Intear team.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {blogPosts.length === 0 ? (
            <div className="bg-gray-900 border border-gray-800 rounded-lg p-12 text-center">
              <div className="mb-6">
                <svg
                  className="w-16 h-16 text-gray-600 mx-auto mb-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                    d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                  />
                </svg>
                <h3 className="text-2xl font-semibold text-white mb-4">
                  Coming Soon
                </h3>
                <p className="text-gray-400">
                  We&apos;re working on bringing you the latest insights and
                  updates from the world of NEAR and DeFi. Stay tuned for
                  technical deep-dives, product updates, and industry analysis.
                </p>
              </div>

              <div className="pt-6 border-t border-gray-800">
                <p className="text-sm text-gray-500">
                  Want to be notified when we publish our first post?
                </p>
                <div className="mt-4 flex justify-center space-x-4">
                  <a
                    href="https://x.com/intea_rs"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    Follow us on X
                  </a>
                  <span className="text-gray-600">•</span>
                  <a
                    href="https://t.me/intearchat"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    Join our Telegram
                  </a>
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-8">
              {blogPosts.map(post => (
                <article
                  key={post.id}
                  className="bg-gray-900 border border-gray-800 rounded-lg overflow-hidden hover:border-gray-700 transition-colors"
                >
                  <div className="flex flex-col md:flex-row p-8 gap-8">
                    {/* Post Content */}
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                        <time className="text-sm text-gray-500 mb-2 sm:mb-0">
                          {new Date(post.publishDate).toLocaleDateString(
                            'en-US',
                            {
                              year: 'numeric',
                              month: 'long',
                              day: 'numeric',
                            }
                          )}
                        </time>
                      </div>

                      <h2 className="text-2xl font-bold text-white mb-4 hover:text-gray-300 transition-colors">
                        <a href={`/blog/${post.slug}`}>{post.title}</a>
                      </h2>

                      <p className="text-gray-400 mb-6 leading-relaxed">
                        {post.excerpt}
                      </p>

                      <a
                        href={`/blog/${post.slug}`}
                        className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
                      >
                        Read more
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
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </a>
                    </div>

                    {/* Cover Image */}
                    <div className="flex-shrink-0 md:w-48">
                      <div className="relative w-full h-64 md:w-48 md:h-full rounded-lg overflow-hidden">
                        <Image
                          src={post.coverImage}
                          alt={post.title}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 256px"
                        />
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
