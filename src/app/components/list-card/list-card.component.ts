import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-card',
  templateUrl: './list-card.component.html',
  styleUrls: ['./list-card.component.scss']
})
export class ListCardComponent implements OnInit {
  @Input() coin;
  @Input() fiat;

  constructor() { }

  ngOnInit() {
    this.coin.price_change_24h = this.getPriceChange(this.coin['price_' + this.fiat.code], this.coin.percent_change_24h);
    this.coin.price_change_7d = this.getPriceChange(this.coin['price_' + this.fiat.code], this.coin.percent_change_7d);


  }

  getPriceChange(price, percent_change) {
    const price_change = price - ( price / ( 1 + ( percent_change / 100 ) ) );
    return price_change.toFixed(2);
  }

}
