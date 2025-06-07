// Blog data structure
export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  publishDate: string;
  slug: string;
  coverImage: string;
  author: {
    name: string;
    avatar?: string;
    bio?: string;
  };
}

// Sample blog posts
export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: "DEX Aggregator: Don't we have only 1 DEX?",
    excerpt:
      "Today we launched the first DEX aggregator on the NEAR ecosystem. Let's explore why it's important and how it works.",
    coverImage: '/blog1.webp',
    author: {
      name: 'Slime',
      avatar: '/slime-pfp.jpg',
      bio: 'CEO of Intear',
    },
    content: `For as long as I've been in the ecosystem, Rhea Finance (formerly Ref Finance) has dominated the DEX market with no one coming even close. With that in mind, we still couldn't bring ourselves to deliver Rhea-only swap functionality in Intear Wallet. "Surely there must be at least a few more options" we thought. And found these:
    
- [Near Intents](https://app.near-intents.org): Most think it's just a bridge, but it's actually a very flexible settlement layer - that can be used as a NEAR-only DEX (it even does not have slippage!), or as a way to hold cross-chain tokens on a NEAR account without withdrawing them to their native chain. Who knows, maybe we'll even see a launchpad on intents 👀
- [AIdols](https://aidols.bot) and [GraFun](https://gra.fun): Launchpads can act as DEXes too! The bonding curve is just a different way of doing AMM before a full launch, so we can easily enable pre-launch trading in Intear Wallet directly if we have a DEX aggregator.
- [meme.cooking](https://meme.cooking): The biggest NEAR launchpad that doesn't launch a token contract. It's not supported yet, as supporting non-NEP141 is a bit more complex, but there's a chance it will be supported in the future!
- [Veax](https://app.veax.com): A DEX with limited liquidity and routing, but definitely one we're looking to support in the near future.
- [Jump AMM](https://app.jumpdefi.xyz/swap): Another DEX that is going to be launched on mainnet. We're looking forward to integrating it in our aggregator to facilitate usage of new DEXes, which is very important in the beginning for bootstrapping liquidity.
- Also, we can integrate common wrap/unwrap zero-fee functionality for common tokens, such as NEAR/wNEAR (wrapping directly using \`wrap.near\`), or NEAR/STNEAR (staking directly / fast unstaking on Meta Pool) to make all actions available in one interface, with guaranteed best prices. For example, is fast STNEAR unstake (with a small fee) better than just selling STNEAR on Rhea? The user doesn't have to worry about this, as the interface always selects the best value.

Having found so many use cases, we decided to build it, and more importantly, release the API for the public. If you're a wallet developer, you can [access](https://docs.intear.tech/docs/dex-aggregator) the API and start using it in your wallet today. This makes it easier to build new wallets, trading apps, or agents that control their portfolio, as developers don't have to implement each and every DEX individually.

![DEX Aggregator Launched in Intear Wallet](/blog1-img1.jpg)

Going back to the main product, here are some features exclusively available in Intear DEX Aggregator:

1. **Auto Slippage** - The aggregator automatically calculates the best price for the user, taking into account the current market conditions, such as when the token launched, its liquidity, volume, market cap. If it was launched a few seconds ago, has low liquidity, but a lot of volume, the aggregator will automatically set a higher slippage. To enable this feature, choose "Auto" as slippage option in preferences. It's set to Auto by default. Developers can configure the min / max bounds, but Intear Wallet sets them to 0.1% to 10%.
2. **No-slippage DEXes** - If you use a DEX that has no slippage (Near Intents, or wrap/unwrap), a green "No Slippage" badge will be shown next to the best route if you're on desktop. This is not shown on mobile, though.
3. **Exact-output swaps** - So far, almost all DEXes only supported "Exact-input" mode, which means you can specify the amount of tokens you give, and you don't know exactly how many tokens you'll receive because of slippage. The exact-output mode allows specifying the amount of tokens you want to receive, and you don't know exactly how many tokens you'll give because of slippage. This can be useful if, for example, you have NEAR, but you need to pay someone 100 USDC. Instead of guessing or doing math in your head how many NEAR you need to sell, you can just enter the "100" number in the output field, and you're guaranteed to get exactly 100 USDC, not a penny less / more. This is not yet supported by Rhea and GraFun.

Near Intents is a bit harder to work with because of its solver model - we need to wait 3 seconds for the best quote, and the transaction sending is not the same as normal NEAR transactions. For our wallet, we have implemented a lot of abstraction over it, so it's almost unnoticeable - first we fetch routes from all other DEXes, which is much faster (usually less than a second), and the Near Intents route is fetched in the background and is available a bit later. So if you want to get the best quote - you can wait a bit more, but if you're ok with Rhea (which often gives the best price and supports more tokens), you don't have to wait and can just swap without waiting for the additional routes. This complexity increases the difficulty of implementation for third-party developers, though, so if other developers use our router, it will be more tricky for them to support Near Intents.

Looking forward to seeing you all using it, and developers integrating it into their apps!
    `,
    publishDate: '2025-06-07',
    slug: 'dex-aggregator-dont-we-have-only-1-dex',
  },
];

// Helper function to get a post by slug
export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find(post => post.slug === slug);
}

// Helper function to get all posts (sorted by date, newest first)
export function getAllPosts(): BlogPost[] {
  return blogPosts.sort(
    (a, b) =>
      new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime()
  );
}
