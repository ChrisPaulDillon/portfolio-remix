import { PortfolioCardProps } from './PortfolioCard'

export type ProjectCategories =
  | 'Python'
  | 'Blockchain'
  | 'React'
  | 'C#'
  | 'Ethers.js'
  | 'Web3'
  | 'Solidity'
  | 'Discord API'
  | 'EVM'
  | 'Chakra UI'
  | 'Web Scraping'
  | 'Data Analysis'
  | 'Redux'
  | 'Coingecko API'
  | 'Shadcn'
  | 'Next'
  | 'Tailwind'

export interface PortfolioLinkItem {
  linkUrl: string
  linkText: string
}

export const PORTFOLIO_ITEMS: PortfolioCardProps[] = [
  {
    id: 1,
    title: 'Chris Dillon Fitness',
    description:
      'A Personal Trainer website designed with the latest version of Next, App Router, Tailwind & Shadcn',
    extendedDescription: '',
    linkItems: [
      {
        linkText: 'Github',
        linkUrl: 'https://github.com/ChrisPaulDillon/personal-trainer-app'
      }
    ],
    categories: ['React', 'Shadcn', 'Next', 'Tailwind']
  },
  {
    id: 2,
    title: 'ZumoSwap',
    description:
      'A singular token exchange designed to swap tokens and Ether in a decentralised manner.',
    extendedDescription:
      'ZumoSwap was a pilot project that allowed for swapping a token with ether on the Ethereum Testnet. Users can connect their wallet to the blockchain via a 3rd party such as MetaMask and interact with the blockchain through the Decentralised App (dApp). Built with Chakra UI, NextJs & Redux.',
    linkItems: [
      {
        linkText: 'Github',
        linkUrl: 'https://github.com/ChrisPaulDillon/ZumoDEX'
      }
    ],
    categories: ['Solidity', 'React', 'Web3', 'Ethers.js', 'Redux', 'Chakra UI']
  },
  {
    id: 3,
    title: 'Crypto Trading Bot',
    description:
      'Polls various cryptocurrency exchanges and once a new coin listing has been announced, purchases on the GateIO exchange. Also announces on Discord.',
    extendedDescription:
      'Cryptocurrency Bot which polls various exchanges (KuCoin, Binance) listening for changes in coin announcements. Once a new coin has been announced by the exchange, the bot will then proceed to buy the same token on the GateIo exchange and sell when it reaches a set percentage of profit. The coin listing is also announced on Discord.',
    linkItems: [
      {
        linkText: 'GitHub',
        linkUrl:
          'https://github.com/ChrisPaulDillon/CryptoTradingBotDiscordAnnouncer'
      }
    ],
    categories: ['C#', 'Discord API', 'Web Scraping']
  },
  {
    id: 4,
    title: 'EVM Benchmarking',
    description:
      'Performance analysis of modern EVM implementations. This includes Cardanos novel KEVM implementation.',
    extendedDescription:
      'This was part of my PhD research, investing the performance of different EVM client implementations. Factors such as the OS running the node client was also evaluated, with surprising results. Also includes a Big Data pipeline for automatically generating graph results using python.',
    linkItems: [
      {
        linkText: 'GitHub',
        linkUrl: 'https://github.com/ChrisPaulDillon/SmartContractBenchmarking'
      }
    ],
    categories: ['Python', 'Blockchain', 'EVM', 'Data Analysis']
  },
  {
    id: 5,
    title: 'PowerBuddy',
    description:
      'Weightlifting tracker designed to automatically log personal bests and generate custom weightlifting templates based on the individuals criteria.',
    extendedDescription:
      'Weightlifting tracker designed to automatically log personal bests and generate custom weightlifting templates based on the individuals criteria. Choose from popular powerlifting programme templates such as 5/3/1, Stronglifts 5x5, Russian Squat Routine and many more. Personal bests are automatically recorded, giving a historical timeline of your progress!',
    linkItems: [
      {
        linkText: 'Frontend',
        linkUrl: 'https://github.com/ChrisPaulDillon/PowerBuddy-Next'
      },
      {
        linkText: 'Backend',
        linkUrl: 'https://github.com/ChrisPaulDillon/PowerBuddy.API'
      }
    ],
    categories: ['React', 'Redux', 'C#', 'Chakra UI']
  },
  {
    id: 6,
    title: 'ImFeelingBullish.com',
    description:
      'Cryptocurrency aggregator used to automatically filter out potential high return crypto based on a multitude of data points.',
    extendedDescription:
      'Cryptocurrency aggregator used to automatically filter out potential high return crypto based on a multitude of data points. This project was designed to automatically filter out coins that were being manipulated in the market and provide additional information on tokens that had high return potential.',
    linkItems: [
      {
        linkText: 'Front End',
        linkUrl: 'https://github.com/ChrisPaulDillon/ImFeelingBullish-Next'
      }
    ],
    categories: ['React', 'Web3', 'Chakra UI', 'Coingecko API']
  }
]
