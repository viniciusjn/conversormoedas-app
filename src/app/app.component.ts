import { Component, OnInit } from '@angular/core';
import { CurrencyService } from './currency.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent implements OnInit {

  currencies: any;

  constructor(private currencyService: CurrencyService) { }

  ngOnInit() {
    this.currencyService.getCurrenciesNames().subscribe(data => {
      this.currencies = data;
    });
  }
}