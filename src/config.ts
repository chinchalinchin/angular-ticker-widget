export interface Ticker{
  symbol: string,
  name: string
}

export interface SeriesPoint{
  time: string,
  data: any
}

export interface SeriesData{
  latest: SeriesPoint,
  previous: SeriesPoint,
}

export const INTERVAL = "1min"

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
    symbol: 'BRKA',
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
