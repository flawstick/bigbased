export enum CandlestickGranularity {
  ONE_MIN = "ONE_MIN",
  FIVE_MIN = "FIVE_MIN",
  ONE_HOUR = "ONE_HOUR",
  ONE_DAY = "ONE_DAY",
  ONE_WEEK = "ONE_WEEK",
}

export type TokenPriceCandlestick = {
  timestamp: number;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
};

export type TokenPriceCandlestickBirdeye = {
  unixTime: number;
  o: number;
  h: number;
  l: number;
  c: number;
  v: number;
};
