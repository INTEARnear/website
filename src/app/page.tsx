'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { EventStreamClient } from '@intear/inevents-websocket-client';
import Header from '../components/Header';
import Footer from '../components/Footer';

interface TradeEvent {
  balance_changes: { [key: string]: string };
  receipt_id: string;
  trader: string;
  transaction_id: string;
  block_height: number;
  block_timestamp_nanosec: string;
}

interface TokenMetadata {
  name: string;
  symbol: string;
  decimals: number;
  price_usd?: string;
}

interface TokenApiData {
  metadata?: {
    name?: string;
    symbol?: string;
    decimals?: number;
  };
  price_usd?: string;
}

interface Trade {
  id: string;
  trader: string;
  balanceChanges: { [key: string]: string };
  transactionId: string;
  blockHeight: number;
  timestamp: string;
}

export default function Home() {
  const [currentOracleIndex, setCurrentOracleIndex] = useState(0);
  const [currentCompeteCarouselIndex, setCurrentCompeteCarouselIndex] =
    useState(0);
  const [trades, setTrades] = useState<Trade[]>([]);
  const [isConnected, setIsConnected] = useState(false);
  const [tokenMetadata, setTokenMetadata] = useState<{
    [key: string]: TokenMetadata;
  }>({});
  const tradesContainerRef = useRef<HTMLDivElement>(null);

  const partners = [
    {
      name: 'MEME.COOKING',
      url: 'https://meme.cooking',
      image: '/meme-cooking.webp',
    },
    { name: 'AIDOLS', url: 'https://aidols.bot', image: '/aidols.webp' },
    {
      name: 'DRAGON TECH',
      url: 'https://t.me/Dragon_Tech_Bot',
      image: '/dragontech.webp',
    },
    { name: 'POTLOCK', url: 'https://potlock.org', image: '/potlock.webp' },
  ];

  const oracles = [
    ['GPT-4o', 'Centralized AI inference oracle hosted by Intear'],
    [
      'Bitcoin Transaction Inclusion',
      'Trustless oracle that uses Light Client to verify Bitcoin transactions on-chain',
    ],
    [
      'Reclaim GPT-4o',
      'AI inference oracle, verified using Reclaim Protocol zkFetch',
    ],
    [
      'NEAR AI Inference',
      'Centralized, but free. Choose any model available on app.near.ai',
    ],
  ];

  const competeWith = [
    { web2: 'web2', web3: 'within web3' },
    { web2: 'Paypal', web3: 'Metamask' },
    { web2: 'AWS', web3: 'Ethereum' },
    { web2: 'Robinhood', web3: 'Uniswap' },
    { web2: 'Dropbox', web3: 'Filecoin' },
    { web2: 'Chase', web3: 'AAVE' },
  ];

  // Auto-rotate oracles every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentOracleIndex(prevIndex => (prevIndex + 1) % oracles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [oracles.length]);

  // Auto-rotate web2/web3 carousels every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCompeteCarouselIndex(
        prevIndex => (prevIndex + 1) % competeWith.length
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [competeWith.length]);

  // Duplicate the array to create seamless loop
  const allPartners = [...partners, ...partners, ...partners, ...partners];

  // Fetch token metadata
  useEffect(() => {
    const fetchTokenMetadata = async () => {
      try {
        const response = await fetch('https://prices.intear.tech/tokens');
        const data = await response.json();

        const metadata: { [key: string]: TokenMetadata } = {};
        Object.entries(data as Record<string, TokenApiData>).forEach(
          ([tokenId, tokenData]) => {
            metadata[tokenId] = {
              name: tokenData.metadata?.name || tokenId,
              symbol: tokenData.metadata?.symbol || tokenId,
              decimals: tokenData.metadata?.decimals || 24,
              price_usd: tokenData.price_usd,
            };
          }
        );

        setTokenMetadata(metadata);
      } catch (error) {
        console.error('Failed to fetch token metadata:', error);
      }
    };

    fetchTokenMetadata();
  }, []);

  // Helper function to format token names
  const formatTokenName = (tokenAddress: string): string => {
    if (tokenAddress === 'wrap.near' || tokenAddress === 'near') return 'NEAR';

    const metadata = tokenMetadata[tokenAddress];
    if (metadata) {
      return metadata.symbol;
    }

    if (tokenAddress.includes('.meme-cooking.near')) {
      const prefix = tokenAddress.split('.')[0];
      return prefix.toUpperCase();
    }
    if (tokenAddress.includes('.')) {
      const parts = tokenAddress.split('.');
      return parts[0].toUpperCase();
    }
    return tokenAddress.substring(0, 8).toUpperCase();
  };

  // Helper function to format amounts
  const formatAmount = (amount: string, tokenAddress: string): string => {
    const metadata = tokenMetadata[tokenAddress];
    const decimals = metadata?.decimals || 24;

    const num = Math.abs(parseInt(amount));
    const actualAmount = num / Math.pow(10, decimals);

    if (actualAmount >= 1000000) {
      return `${(actualAmount / 1000000).toFixed(3)}M`;
    } else if (actualAmount >= 1000) {
      return `${(actualAmount / 1000).toFixed(3)}K`;
    } else if (actualAmount % 1 < 0.001) {
      return Math.floor(actualAmount).toString();
    } else {
      return actualAmount.toFixed(3);
    }
  };

  // WebSocket connection using official client
  useEffect(() => {
    const client = new EventStreamClient('wss://ws-events-v3.intear.tech');
    let isActive = true;

    const startStreaming = async () => {
      try {
        setIsConnected(true);

        await client.streamEvents<TradeEvent>(
          'trade_swap',
          null,
          async event => {
            if (!isActive) return;

            const balanceChanges = event.balance_changes;
            const entries = Object.entries(balanceChanges);

            // Only process trades with exactly 2 balance changes (one positive, one negative)
            if (entries.length !== 2) return;

            const positive = entries.find(([, amount]) => parseInt(amount) > 0);
            const negative = entries.find(([, amount]) => parseInt(amount) < 0);

            if (!positive || !negative) return;

            const trade: Trade = {
              id: event.receipt_id,
              trader: event.trader,
              balanceChanges: balanceChanges,
              transactionId: event.transaction_id,
              blockHeight: event.block_height,
              timestamp: new Date(
                parseInt(event.block_timestamp_nanosec) / 1000000
              ).toLocaleTimeString(),
            };

            setTrades(prev => {
              const updated = [...prev, trade].slice(-1000); // Keep last 1000, remove from top
              return updated;
            });
          }
        );
      } catch (error) {
        console.error('Stream error:', error);
        setIsConnected(false);
      }
    };

    startStreaming();

    return () => {
      isActive = false;
      setIsConnected(false);
      client.abort();
    };
  }, []);

  // Auto-scroll to bottom when new trades are added
  useEffect(() => {
    if (tradesContainerRef.current) {
      tradesContainerRef.current.scrollTop =
        tradesContainerRef.current.scrollHeight;
    }
  }, [trades]);

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-black overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
                             radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.3) 0%, transparent 50%),
                             radial-gradient(circle at 40% 40%, rgba(120, 219, 255, 0.3) 0%, transparent 50%)`,
            }}
          ></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="text-center">
            <h2 className="text-5xl md:text-7xl font-bold mb-8 font-roboto leading-tight">
              Web3 experience that
              <br />
              doesn&apos;t suck
            </h2>
            <div className="text-xl md:text-2xl mb-12 text-gray-300 max-w-4xl mx-auto leading-relaxed">
              <div className="flex flex-wrap justify-center items-center">
                <span>Compete with&nbsp;</span>
                <div className="relative inline-block overflow-hidden h-8">
                  <div
                    className="transition-transform duration-500 ease-in-out"
                    style={{
                      transform: `translateY(-${currentCompeteCarouselIndex * 32}px)`,
                    }}
                  >
                    {competeWith.map((item, index) => (
                      <div
                        key={index}
                        className={`h-8 flex items-center font-semibold ${
                          index === currentCompeteCarouselIndex
                            ? 'text-blue-400'
                            : 'text-gray-300'
                        }`}
                      >
                        {item.web2}
                      </div>
                    ))}
                  </div>
                </div>
                <span>&nbsp;not&nbsp;</span>
                <div className="relative inline-block overflow-hidden h-8">
                  <div
                    className="transition-transform duration-500 ease-in-out"
                    style={{
                      transform: `translateY(-${currentCompeteCarouselIndex * 32}px)`,
                    }}
                  >
                    {competeWith.map((item, index) => (
                      <div
                        key={index}
                        className={`h-8 flex items-center font-semibold ${
                          index === currentCompeteCarouselIndex
                            ? 'text-red-400'
                            : 'text-gray-300'
                        }`}
                      >
                        {item.web3}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <br />
              Give your users an experience better than web2 with Intear
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="https://docs.intear.tech"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-lg cursor-pointer"
              >
                Documentation
              </a>
            </div>
          </div>
        </div>

        {/* Continuous Sliding Partner Logos Section */}
        <div className="relative border-t border-gray-800 py-12 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h3 className="text-lg font-semibold text-gray-400 tracking-wider uppercase">
                Our Users
              </h3>
            </div>
            <div className="relative overflow-hidden">
              <div className="flex space-x-12 animate-slide">
                {allPartners.map((partner, index) => (
                  <div
                    key={`${partner.name}-${index}`}
                    className="flex-shrink-0 whitespace-nowrap"
                  >
                    <a
                      href={partner.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block hover:opacity-80 transition-opacity"
                    >
                      <Image
                        src={partner.image}
                        alt={partner.name}
                        width={120}
                        height={32}
                        className="h-8 w-auto hover:grayscale-0 transition-all duration-300"
                      />
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl md:text-5xl font-bold mb-6 font-roboto">
              Build faster with Intear
            </h3>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Blockchain indexing has been our bread and butter for years.
              <br />
              Now our tooling is available for everyone.
            </p>
          </div>
        </div>
      </section>

      {/* Rainy Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="text-green-500 text-sm font-semibold tracking-wider uppercase mb-4">
                RPC & INDEXING
              </div>
              <h4 className="text-4xl font-bold mb-6 font-roboto">Rainy</h4>
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                Reliable RPC with additional methods for batching and token
                data, combined with a powerful cloud indexer platform,
                meta-transaction relayers, private wallet / Telegram bot
                hosting, and more.
              </p>

              <div className="space-y-6 mb-8">
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex-shrink-0 mt-1"></div>
                  <p className="text-gray-300">
                    Custom RPC methods for efficient batching and token
                    operations (price, balances, holders, metadata, spam lists,
                    search, and more)
                  </p>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex-shrink-0 mt-1"></div>
                  <p className="text-gray-300">
                    Scalable cloud indexer platform for NEP-297 events of your
                    contracts (real-time WebSocket or historical HTTP)
                  </p>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex-shrink-0 mt-1"></div>
                  <p className="text-gray-300">
                    Near-instant backfill of historical data from genesis block
                  </p>
                </div>
              </div>

              <div className="flex space-x-4">
                <button className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors cursor-pointer">
                  Start building
                </button>
                <button className="text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-900 transition-colors cursor-pointer">
                  Learn more →
                </button>
              </div>
            </div>

            <div className="relative">
              {/* Real-time Trading Feed */}
              <div className="bg-gradient-to-br from-green-900/20 to-emerald-900/20 p-8 rounded-2xl border border-green-800/30">
                <div className="text-green-300 text-xs font-semibold tracking-wider uppercase mb-6 flex items-center">
                  <div
                    className={`w-2 h-2 rounded-full mr-2 ${isConnected ? 'bg-green-400' : 'bg-red-400'}`}
                  ></div>
                  LIVE TRADES FROM REALTIME API
                </div>

                <div className="relative">
                  <div
                    className="space-y-3 max-h-80 overflow-y-auto scrollbar-hidden"
                    ref={tradesContainerRef}
                  >
                    {trades.length === 0 ? (
                      <div className="text-center text-gray-400 py-8">
                        <div className="animate-pulse">
                          Connecting to live feed...
                        </div>
                      </div>
                    ) : (
                      trades.map(trade => {
                        const entries = Object.entries(trade.balanceChanges);
                        const positive = entries.find(
                          ([, amount]) => parseInt(amount as string) > 0
                        );
                        const negative = entries.find(
                          ([, amount]) => parseInt(amount as string) < 0
                        );

                        if (!positive || !negative) return null;

                        const boughtToken = formatTokenName(positive[0]);
                        const soldToken = formatTokenName(negative[0]);
                        const boughtAmount = formatAmount(
                          positive[1],
                          positive[0]
                        );
                        const soldAmount = formatAmount(
                          negative[1],
                          negative[0]
                        );

                        return (
                          <div
                            key={trade.id}
                            className="bg-gray-800/30 p-4 rounded-lg border border-gray-700 hover:border-green-500 transition-colors trade-item"
                          >
                            <div className="flex justify-between items-start mb-2">
                              <div className="text-green-300 font-mono text-sm">
                                {trade.trader.length >= 15
                                  ? `${trade.trader.substring(0, 12)}…`
                                  : trade.trader}{' '}
                                swapped
                              </div>
                              <div className="text-gray-400 text-xs">
                                {trade.timestamp}
                              </div>
                            </div>

                            <div className="flex items-center justify-between mb-2">
                              <div className="text-white text-sm">
                                {soldAmount} {soldToken} → {boughtAmount}{' '}
                                {boughtToken}
                              </div>
                            </div>

                            <div className="flex justify-between items-center">
                              <div></div>
                              <a
                                href={`https://nearblocks.io/txns/${trade.transactionId}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-400 hover:text-blue-300 text-xs transition-colors"
                              >
                                View Tx →
                              </a>
                            </div>
                          </div>
                        );
                      })
                    )}
                  </div>

                  {/* Top fade overlay */}
                  {trades.length > 0 && (
                    <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-green-900/20 to-transparent pointer-events-none"></div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intear Wallet Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="text-blue-500 text-sm font-semibold tracking-wider uppercase mb-4">
                SMART WALLET
              </div>
              <h4 className="text-4xl font-bold mb-6 font-roboto">
                Intear Wallet
              </h4>
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                The fastest wallet on NEAR Protocol. Experience seamless
                transactions with features for advanced traders and unmatched
                performance.
              </p>

              <div className="space-y-6 mb-8">
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex-shrink-0 mt-1"></div>
                  <p className="text-gray-300">
                    Lightning-fast transaction processing, send multiple
                    transactions at once
                  </p>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex-shrink-0 mt-1"></div>
                  <p className="text-gray-300">
                    Log in with Google, Face ID, Passkeys, Ethereum, Solana, no
                    need to save seed phrase
                  </p>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex-shrink-0 mt-1"></div>
                  <p className="text-gray-300">
                    Most up-to-date ecosystem map and easy onboarding
                  </p>
                </div>
              </div>

              <div className="flex space-x-4">
                <a
                  href="https://wallet.intear.tech"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-block cursor-pointer"
                >
                  Create you.near
                </a>
              </div>
            </div>

            <div className="relative">
              {/* Smartphone and Tablet Preview */}
              <div className="flex justify-center space-x-8">
                {/* Smartphone */}
                <div className="relative">
                  <Image
                    src="/wallet-mobile.png"
                    alt="Intear Wallet Mobile Interface"
                    width={192}
                    height={384}
                    className="w-48 h-96 object-cover rounded-2xl shadow-2xl border-3 border-b-8 border-gray-800"
                  />
                </div>

                {/* Tablet */}
                <div className="relative hidden md:block">
                  <Image
                    src="/wallet-tablet.png"
                    alt="Intear Wallet Tablet Interface"
                    width={256}
                    height={320}
                    className="w-72 h-90 object-cover rounded-2xl shadow-2xl border-3 border-b-4 border-gray-800"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bettear Bot Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="text-purple-500 text-sm font-semibold tracking-wider uppercase mb-4">
                FASTEST TRADING
              </div>
              <h4 className="text-4xl font-bold mb-6 font-roboto">
                Bettear Bot
              </h4>
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                The fastest trading bot on NEAR Protocol. Blink and it&apos;s
                final
              </p>

              <div className="space-y-6 mb-8">
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-purple-500 rounded-full flex-shrink-0 mt-1"></div>
                  <p className="text-gray-300">
                    Trade on Rhea and NEAR Intents, and all major launchpads:
                    meme.cooking, AIdols, GraFun
                  </p>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-purple-500 rounded-full flex-shrink-0 mt-1"></div>
                  <p className="text-gray-300">
                    Have an unfair advantage: Trade much faster than on official
                    websites
                  </p>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-purple-500 rounded-full flex-shrink-0 mt-1"></div>
                  <p className="text-gray-300">
                    Wallet Tracking, new token alerts, sniping, copy-trade, DCA,
                    and <b>much</b> more
                  </p>
                </div>
              </div>

              <div className="flex space-x-4">
                <a
                  href="https://t.me/BettearBot"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors inline-block cursor-pointer"
                >
                  Start Trading
                </a>
              </div>
            </div>

            <div className="relative">
              {/* Trading Groups */}
              <div className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 p-8 rounded-2xl border border-purple-800/30">
                <div className="text-purple-300 text-sm font-semibold tracking-wider uppercase mb-6">
                  Or follow these pre-made channels:
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <a
                    href="https://t.me/sh1tc0in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 hover:border-purple-500 transition-colors text-center group cursor-pointer"
                  >
                    <div className="flex justify-center mb-4">
                      <Image
                        src="/shitcoins.jpg"
                        alt="shitcoins avatar"
                        width={48}
                        height={48}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                    </div>
                    <div className="text-white font-semibold mb-2">
                      shitcoins
                    </div>
                    <div className="text-gray-400 text-sm group-hover:text-purple-300">
                      Sends a message anytime a new token gets launched
                    </div>
                  </a>
                  <a
                    href="https://t.me/near_trending"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 hover:border-purple-500 transition-colors text-center group cursor-pointer"
                  >
                    <div className="flex justify-center mb-4">
                      <Image
                        src="/near-trending.jpg"
                        alt="NEAR Trending avatar"
                        width={48}
                        height={48}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                    </div>
                    <div className="text-white font-semibold mb-2">
                      NEAR Trending
                    </div>
                    <div className="text-gray-400 text-sm group-hover:text-purple-300">
                      Follow large buys of memecoins
                    </div>
                  </a>
                  <a
                    href="https://t.me/near_dumpers"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 hover:border-purple-500 transition-colors text-center group cursor-pointer"
                  >
                    <div className="flex justify-center mb-4">
                      <Image
                        src="/near-dumpers.jpg"
                        alt="NEAR Dumpers avatar"
                        width={48}
                        height={48}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                    </div>
                    <div className="text-white font-semibold mb-2">
                      NEAR Dumpers
                    </div>
                    <div className="text-gray-400 text-sm group-hover:text-purple-300">
                      See every large memecoin selloff
                    </div>
                  </a>
                  <a
                    href="https://t.me/BettearBot"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 hover:border-purple-500 transition-colors text-center group cursor-pointer"
                  >
                    <div className="flex justify-center mb-4">
                      <div className="w-12 h-12 rounded-full bg-gray-700 flex items-center justify-center">
                        <svg
                          className="w-6 h-6 text-gray-300"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="text-white font-semibold mb-2">
                      Your own
                    </div>
                    <div className="text-gray-400 text-sm group-hover:text-purple-300">
                      Did you know that you can set up a bot like this in your
                      own group / channel?
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PumpItBetty Section */}
      <section className="py-20 bg-gray-900 relative">
        {/* Background Image */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'url("TODO")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        ></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="text-red-500 text-sm font-semibold tracking-wider uppercase mb-4">
              SELF-SERVE MARKET MAKING FOR YOUR TOKEN
            </div>
            <h4 className="text-4xl font-bold mb-6 font-roboto">PumpItBetty</h4>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
              Professional (not really) market making tool designed for NEAR,
              Solana, and Sui ecosystems.
              <br />
              Or if you&apos;re a degen: buy and sell from 1000 accounts with a
              simple dashboard.
            </p>

            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
              <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
                <div className="text-green-400 text-2xl font-bold mb-2">
                  NEAR
                </div>
                <div className="text-gray-300">
                  Pump any token on NEAR or on Intents
                </div>
              </div>
              <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
                <div className="text-purple-400 text-2xl font-bold mb-2">
                  Solana
                </div>
                <div className="text-gray-300">
                  Supports all DEXes that work with Jupiter, including Pump
                </div>
              </div>
              <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
                <div className="text-blue-400 text-2xl font-bold mb-2">Sui</div>
                <div className="text-gray-300">Supports 10+ DEXes</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://pumpit.intear.tech"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-red-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-700 transition-colors text-lg cursor-pointer"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Intear Oracle Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="text-yellow-500 text-sm font-semibold tracking-wider uppercase mb-4">
                DATA MARKETPLACE
              </div>
              <h4 className="text-4xl font-bold mb-6 font-roboto">
                Intear Oracle
              </h4>
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                General-purpose oracle platform that utilizes NEAR&apos;s
                yield-resume functionality for reliable, decentralized, and
                trustless data feeds for your AI, price, and other applications.
              </p>

              <div className="space-y-6 mb-8">
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-yellow-500 rounded-full flex-shrink-0 mt-1"></div>
                  <p className="text-gray-300">
                    Request data from oracles and get response within the same
                    transaction
                  </p>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-yellow-500 rounded-full flex-shrink-0 mt-1"></div>
                  <p className="text-gray-300">
                    Flexible fee configuration if you want to sell your data
                  </p>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-yellow-500 rounded-full flex-shrink-0 mt-1"></div>
                  <p className="text-gray-300">
                    As easy as a cross-contract call
                  </p>
                </div>
              </div>

              <div className="flex space-x-4">
                <a
                  href="https://oracle.intear.tech"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-yellow-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-yellow-700 transition-colors cursor-pointer"
                >
                  Browse Oracles
                </a>
              </div>
            </div>

            <div className="relative">
              {/* Active Oracles Carousel */}
              <div className="bg-gradient-to-br from-yellow-500/20 to-green-800/15 p-8 rounded-2xl border border-yellow-800/30">
                <div className="text-yellow-300 text-xs font-semibold tracking-wider uppercase mb-6">
                  MOST POPULAR ORACLES
                </div>

                {/* Single Oracle Display */}
                <div className="min-h-[200px] flex items-center justify-center">
                  <div className="w-full">
                    <div className="bg-yellow-900/30 border border-yellow-500 p-8 rounded-lg text-center">
                      <div className="text-yellow-300 font-bold text-2xl mb-4">
                        {oracles[currentOracleIndex][0]}
                      </div>
                      <div className="text-yellow-200 text-lg mb-2">
                        {oracles[currentOracleIndex][1]}
                      </div>
                      <div className="text-yellow-400 text-sm">
                        Featured Oracle
                      </div>
                    </div>
                  </div>
                </div>

                {/* Navigation Circles */}
                <div className="flex justify-center mt-8">
                  <div className="flex space-x-3">
                    {oracles.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentOracleIndex(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 hover:scale-110 cursor-pointer ${
                          index === currentOracleIndex
                            ? 'bg-yellow-400 shadow-lg shadow-yellow-400/50'
                            : 'bg-gray-600 hover:bg-gray-500'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Documentation Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h4 className="text-3xl font-bold mb-6 font-roboto">
              Ready to dive deeper?
            </h4>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Explore our comprehensive documentation to get started with all
              Intear products and services.
            </p>
            <a
              href="https://docs.intear.tech"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-lg inline-block cursor-pointer"
            >
              View Documentation
            </a>
          </div>
        </div>
      </section>

      <Footer />

      <style jsx>{`
        @keyframes slide {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-slide {
          animation: slide 40s linear infinite;
        }

        .animate-slide:hover {
          animation-play-state: paused;
        }

        .trade-item {
          animation: slideInFromBottom 0.5s ease-out;
        }

        @keyframes slideInFromBottom {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .space-y-3 > * + * {
          transition: transform 0.3s ease-out;
        }

        .scrollbar-hidden {
          -ms-overflow-style: none; /* Internet Explorer 10+ */
          scrollbar-width: none; /* Firefox */
        }

        .scrollbar-hidden::-webkit-scrollbar {
          display: none; /* Safari and Chrome */
        }
      `}</style>
    </div>
  );
}
