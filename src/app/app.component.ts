import { Component } from '@angular/core';
import {AfterViewInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';


export interface UserData {
  name: string;
  number: number;
  position: string;
  price: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent implements AfterViewInit {
  displayedColumns: string[] = ['name', 'number', 'position', 'price'];
  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor() {
    const users: UserData[] = [
      { name: 'Matheus Cunha', number: 25,  position: 'GOL', price: 3 },
      { name: 'Agustín Rossi', number: 17, position: 'GOL', price: 6 },
      { name: 'Santos', number: 1,  position: 'GOL', price: 2 },
      { name: 'Léo Pereira', number: 4, position: 'ZAG', price: 4 },{ name: 'Fabrício Bruno', number: 15,  position: 'ZAG', price: 3 },
      { name: 'Pablo', number: 30, position: 'ZAG', price: 2 },
      { name: 'Rodrigo Caio', number: 3, position: 'ZAG', price: 2 },
      { name: 'David Luiz', number: 23, position: 'ZAG', price: 1 },
      { name: 'Ayrton Lucas', number: 6, position: 'LAT', price: 9 },
      { name: 'Filipe Luís', number: 16, position: 'LAT', price: 1 },
      { name: 'Matheuzinho', number: 34, position: 'LAT', price: 6 },
      { name: 'Wesley', number: 43, position: 'LAT', price: 3 },
      { name: 'Guillermo Varela', number: 2, position: 'LAT', price: 2 },
      { name: 'Allan', number: 21, position: 'VOL', price: 7 },
      { name: 'Erick Pulgar', number: 5, position: 'VOL', price: 6 },
      { name: 'Thiago Maia', number: 8, position: 'VOL', price: 6 },
      { name: 'Gerson', number: 20, position: 'MEI', price: 15 },
      { name: 'Victor Hugo', number: 29, position: 'MEI', price: 3 },
      { name: 'Everton Ribeiro', number: 7, position: 'MEI', price: 3 },
      { name: 'Arrascaeta', number: 14, position: 'MEI', price: 17 },
      { name: 'Everton Cebolinha', number: 11, position: 'ATA', price: 9 },
      { name: 'Luiz Araújo', number: 22, position: 'ATA', price: 6 },
      { name: 'Bruno Henrique', number: 27, position: 'ATA', price: 3 },
      { name: 'Gabigol', number: 10, position: 'ATA', price: 20 },
      { name: 'Pedro', number: 9, position: 'ATA', price: 22 },
    ];
    this.dataSource = new MatTableDataSource(users);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}