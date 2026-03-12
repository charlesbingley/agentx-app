export type MarketSymbol = string;

export type PriceTick = {
  symbol: MarketSymbol;
  price: number;
  timestamp: number;
};
