import { notFound } from 'next/navigation';
import { getPostBySlug, getAllPosts } from '../data';
import Image from 'next/image';
import Link from 'next/link';
import Markdown from 'react-markdown';
import SocialShare from '../components/SocialShare';

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Back to blog link */}
        <div className="mb-8">
          <Link
            href="/blog"
            className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
          >
            <svg
              className="w-4 h-4 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to Blog
          </Link>
        </div>

        {/* Cover Image */}
        <div className="flex justify-center mb-12">
          <div className="relative rounded-lg overflow-hidden">
            <Image
              src={post.coverImage}
              alt={post.title}
              width={768}
              height={512}
              className="object-cover w-auto h-auto"
              priority
            />
          </div>
        </div>

        {/* Article header */}
        <article>
          <header className="mb-12">
            <time className="text-sm text-gray-500 mb-4 block">
              {new Date(post.publishDate).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </time>

            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 font-roboto tracking-wider leading-tight">
              {post.title}
            </h1>

            <p className="text-xl text-gray-400 leading-relaxed">
              {post.excerpt}
            </p>
          </header>

          {/* Article content - Markdown rendered */}
          <div className="max-w-none prose prose-invert prose-lg">
            <Markdown
              components={{
                // Headings
                h1: ({ children }) => (
                  <h1 className="text-3xl font-bold text-white mt-12 mb-6 border-b border-gray-700 pb-4">
                    {children}
                  </h1>
                ),
                h2: ({ children }) => (
                  <h2 className="text-2xl font-semibold text-white mt-10 mb-4 border-b border-gray-800 pb-2">
                    {children}
                  </h2>
                ),
                h3: ({ children }) => (
                  <h3 className="text-xl font-semibold text-white mt-8 mb-3">
                    {children}
                  </h3>
                ),
                h4: ({ children }) => (
                  <h4 className="text-lg font-medium text-white mt-6 mb-2">
                    {children}
                  </h4>
                ),
                // Paragraphs
                p: ({ children }) => (
                  <p className="text-gray-300 leading-relaxed mb-6 text-lg">
                    {children}
                  </p>
                ),
                // Links
                a: ({ href, children }) => (
                  <a
                    href={href}
                    className="text-blue-400 hover:text-blue-300 underline decoration-blue-400/50 hover:decoration-blue-300 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {children}
                  </a>
                ),
                // Lists
                ul: ({ children }) => (
                  <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2 ml-4">
                    {children}
                  </ul>
                ),
                ol: ({ children }) => (
                  <ol className="list-decimal list-inside text-gray-300 mb-6 space-y-2 ml-4">
                    {children}
                  </ol>
                ),
                li: ({ children }) => (
                  <li className="text-gray-300 leading-relaxed">{children}</li>
                ),
                // Blockquotes
                blockquote: ({ children }) => (
                  <blockquote className="border-l-4 border-blue-500 pl-6 py-2 my-6 bg-gray-900/50 rounded-r-lg">
                    <div className="text-gray-300 italic text-lg">
                      {children}
                    </div>
                  </blockquote>
                ),
                // Inline code
                code: ({ children }) => (
                  <code className="bg-gray-800 text-blue-300 px-2 py-1 rounded text-sm font-mono">
                    {children}
                  </code>
                ),
                // Images
                img: ({ src, alt }) => (
                  <div className="my-8 flex justify-center">
                    <Image
                      src={(src as string) || ''}
                      alt={alt || ''}
                      width={800}
                      height={600}
                      className="rounded-lg shadow-lg max-w-full h-auto"
                    />
                  </div>
                ),
                // Horizontal rules
                hr: () => <hr className="my-12 border-gray-700" />,
                // Tables
                table: ({ children }) => (
                  <div className="overflow-x-auto my-6">
                    <table className="min-w-full bg-gray-900 rounded-lg overflow-hidden">
                      {children}
                    </table>
                  </div>
                ),
                thead: ({ children }) => (
                  <thead className="bg-gray-800">{children}</thead>
                ),
                tbody: ({ children }) => (
                  <tbody className="divide-y divide-gray-700">{children}</tbody>
                ),
                tr: ({ children }) => (
                  <tr className="hover:bg-gray-800/50 transition-colors">
                    {children}
                  </tr>
                ),
                th: ({ children }) => (
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                    {children}
                  </th>
                ),
                td: ({ children }) => (
                  <td className="px-6 py-4 whitespace-nowrap text-gray-300">
                    {children}
                  </td>
                ),
                // Strong and emphasis
                strong: ({ children }) => (
                  <strong className="font-semibold text-white">
                    {children}
                  </strong>
                ),
                em: ({ children }) => (
                  <em className="italic text-gray-200">{children}</em>
                ),
              }}
            >
              {post.content}
            </Markdown>
          </div>
        </article>

        {/* Article footer */}
        <div className="mt-16 pt-8 border-t border-gray-800">
          {/* Author Information */}
          <div className="flex items-center space-x-4 mb-8">
            {post.author.avatar && (
              <div className="relative w-12 h-12 rounded-full overflow-hidden">
                <Image
                  src={post.author.avatar}
                  alt={post.author.name}
                  width={48}
                  height={48}
                  className="object-cover"
                />
              </div>
            )}
            <div>
              <p className="text-white font-medium">{post.author.name}</p>
              {post.author.bio && (
                <p className="text-gray-400 text-sm">{post.author.bio}</p>
              )}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <div className="mb-4 sm:mb-0">
              <p className="text-sm text-gray-500">
                Published on{' '}
                {new Date(post.publishDate).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </p>
            </div>

            <SocialShare title={post.title} />
          </div>
        </div>
      </div>
    </div>
  );
}

// Generate static params for all blog posts
export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map(post => ({
    slug: post.slug,
  }));
}

// Generate metadata for each blog post
export async function generateMetadata({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  // Ensure the cover image URL is absolute
  const coverImageUrl = post.coverImage.startsWith('http')
    ? post.coverImage
    : `${process.env.NODE_ENV === 'production' ? 'https://intear.tech' : 'http://localhost:3000'}${post.coverImage}`;

  return {
    metadataBase: new URL(
      process.env.NODE_ENV === 'production'
        ? 'https://intear.tech'
        : 'http://localhost:3000'
    ),
    title: `${post.title} | Intear Blog`,
    description: post.excerpt,
    openGraph: {
      title: `${post.title} | Intear Blog`,
      description: post.excerpt,
      images: [
        {
          url: coverImageUrl,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${post.title} | Intear Blog`,
      description: post.excerpt,
      images: [coverImageUrl],
    },
  };
}
