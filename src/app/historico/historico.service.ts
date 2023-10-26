import { Injectable } from '@angular/core';
import { ConversionHistoryItem  } from './historico-item.model';

@Injectable({
  providedIn: 'root'
})
export class HistoricoService {
  private history: ConversionHistoryItem[] = [];

  addToHistory(conversion: ConversionHistoryItem) {
    this.history.push(conversion);
  }

  getHistory(): ConversionHistoryItem[] {
    return this.history;
  }

  clearHistory() {
    this.history = [];
  }
}
