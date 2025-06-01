import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import localFont from 'next/font/local';
import './globals.css';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-roboto',
});

const logo = localFont({
  src: '../../public/FunnelDisplay-ExtraBold.ttf',
  variable: '--font-logo',
  weight: '900',
});

export const metadata: Metadata = {
  title: 'Intear',
  description: 'Building the best web3 infrastructure',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} ${logo.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
