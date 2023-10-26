export class ConversionHistoryItem {
    fromCurrency: string;
    toCurrency: string;
    exchangeRate: number;
    amountConverted: number;
    date: Date;
  
    constructor(
      fromCurrency: string,
      toCurrency: string,
      exchangeRate: number,
      amountConverted: number,
      date: Date
    ) {
      this.fromCurrency = fromCurrency;
      this.toCurrency = toCurrency;
      this.exchangeRate = exchangeRate;
      this.amountConverted = amountConverted;
      this.date = date;
    }
  }