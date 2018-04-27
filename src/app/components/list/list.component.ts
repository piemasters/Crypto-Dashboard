import { Component, OnInit } from '@angular/core';
import { AppService } from '../../app.service';
import { Coin } from '../../models/coin.model';
import { Fiat } from '../../models/fiat.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  coins: Coin[];
  noDataMsg: string;
  fiat: Fiat[];

  constructor(private appService: AppService) {
    this.noDataMsg = 'Select fiat currency to get started';

    this.appService.filteredCoinsSubject.subscribe({
      next: (coins) => this.updateCoins(coins),
    });

    this.appService.apiSubject.subscribe({
      next: (msg) => this.noDataMsg = msg,
    });

    this.appService.fiatSubject.subscribe({
      next: (fiat) => this.fiat = fiat,
    });
  }

  ngOnInit() {
  }

  updateCoins(coins: Coin[]) {
    this.coins = [];
    coins.forEach((coin) => this.coins.push(coin));
  }

}
