import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-card',
  templateUrl: './list-card.component.html',
  styleUrls: ['./list-card.component.scss']
})
export class ListCardComponent implements OnInit {
  @Input() coin;
  @Input() fiat;
  fiat_symbol: string;

  constructor() { }

  ngOnInit() {
    this.coin.price_change_24h = this.getPriceChange(this.coin['price_' + this.fiat], this.coin.percent_change_24h);
    this.coin.price_change_7d = this.getPriceChange(this.coin['price_' + this.fiat], this.coin.percent_change_7d);

    this.update_currency(this.fiat);
  }

  getPriceChange(price, percent_change) {
    const price_change = price - ( price / ( 1 + ( percent_change / 100 ) ) );
    return price_change.toFixed(2);
  }

  update_currency(currency) {
    if (currency === 'gbp') {}
    switch (currency) {
      case 'gbp':
        this.fiat_symbol = '£';
        break;
      case 'usd':
        this.fiat_symbol = '$';
        break;
      case 'eur':
        this.fiat_symbol = '€';
        break;
      default:
        this.fiat_symbol = '';
    }
  }

}
