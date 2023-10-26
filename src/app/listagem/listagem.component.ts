import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { CurrencyService } from 'src/app/currency.service';
import { IListaMoedas } from 'src/app/model/IListaMoedas';
import { IListCurrencies } from 'src/app/model/IListCurrencies';
import { MatPaginator } from '@angular/material/paginator';
import { MatTable} from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.css']
})
export class ListagemComponent implements OnInit {
  displayedColumns: string[] = ['symbol','name'];
  dataSource: MatTableDataSource<IListCurrencies> = new MatTableDataSource<IListCurrencies>([]);
  pageSize: number = 10;

  @ViewChild('input', { static: true }) input: HTMLInputElement | undefined;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator | undefined;
  @ViewChild(MatSort, { static: true }) sort: MatSort | undefined;

  constructor(private currencyService: CurrencyService) {
    this.dataSource = new MatTableDataSource<IListCurrencies>([]);
  }

  ngOnInit() {
    if (this.paginator) {
      this.dataSource.paginator = this.paginator;
    }
    if (this.sort) {
      this.dataSource.sort = this.sort;
    }
    
    this.currencyService.getCurrenciesNames().subscribe(
      (response) => {
        if (response.result === 'success' && response.supported_codes) {
          const currenciesArray: IListCurrencies[] = response.supported_codes.map((currency: any) => {
            return {
              symbol: currency[0],
              name: currency[1]
            };
          });
          this.dataSource.data = currenciesArray;
        }
      },
      (error) => {
        console.error('Erro na solicitação:', error);
      }
    );
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
