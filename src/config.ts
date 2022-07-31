export interface Ticker{
  symbol: string,
  name: string
}

export interface Quote{
  open: number,
  high: number,
  low: number, 
  price: number,
  volume: number,
  previous: number,
  change: number,
  percent: number
}

export interface Meta{
  market_cap: number
}

export const VALID: Ticker[] = [
  {
    symbol: 'MSFT',
    name: 'Microsoft'
  },
  {
    symbol: 'AAPL',
    name: 'Apple'
  },
  {
    symbol: 'INFO',
    name: 'IHS Market'
  },
  {
    symbol: 'BRK.A',
    name: 'Berkshire Hathaway'
  },
  {
    symbol: 'F',
    name: 'Ford Motors'
  },
  {
    symbol: 'PLT',
    name: 'Planetel SPA'
  },
  {
    symbol: 'BIG',
    name: 'Big Lots'
  },
  {
    symbol: 'TWX',
    name: 'Time Warner'
  },
  {
    symbol: 'AME',
    name: 'AMETEK'
  },
  {
    symbol: 'JWN',
    name: 'Nordstrom'
  },
  {
    symbol: 'CVS',
    name: 'CVS Health'
  },
  {
    symbol: 'MS',
    name: 'Morgan Stanley'
  },
  {
    symbol: 'MET',
    name: 'Metlife'
  },
]
