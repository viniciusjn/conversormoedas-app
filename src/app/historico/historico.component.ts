import { Component, OnInit } from '@angular/core';
import { ConversionHistoryItem } from './historico-item.model';
import { HistoricoService } from './historico.service';

@Component({
  selector: 'app-historico',
  templateUrl: './historico.component.html',
  styleUrls: ['./historico.component.css']
})

export class HistoricoComponent implements OnInit {
  
  history: ConversionHistoryItem[] = [];

  constructor(private historyService: HistoricoService) { }

  ngOnInit(): void {
    this.history = this.historyService.getHistory();
  }
}
