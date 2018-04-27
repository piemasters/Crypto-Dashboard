import { Component, OnInit } from '@angular/core';
import { AppService } from '../../app.service';
import { IMultiSelectOption, IMultiSelectSettings, IMultiSelectTexts } from 'angular-2-dropdown-multiselect';

@Component({
  selector: 'app-search-filter',
  templateUrl: './search-filter.component.html',
  styleUrls: ['./search-filter.component.scss']
})
export class SearchFilterComponent implements OnInit {

  currencies;

  // model to store selected fiat
  selectedCurrency: string;

  // array to hold names of cryptos to be used in filtering
  cryptoCurrOptions: IMultiSelectOption[] = [];

  // Default selection
  optionsModel: number[];

  // Multi-select settings configuration
  mySettings: IMultiSelectSettings = {
    enableSearch: true,
    checkedStyle: 'fontawesome',
    buttonClasses: 'btn btn-default btn-block',
    dynamicTitleMaxItems: 5,
    displayAllSelectedText: true
  };

  // Multi-select text configuration
  myTexts: IMultiSelectTexts = {
    checkAll: 'Select all',
    uncheckAll: 'Unselect all',
    checked: 'item selected',
    checkedPlural: 'items selected',
    searchPlaceholder: 'Find',
    searchEmptyResult: 'Nothing found...',
    searchNoRenderText: 'Type in search box to see results...',
    defaultTitle: 'Filter cryptos',
    allSelected: 'All selected',
  };

  constructor(private appService: AppService) {
    this.appService.coinsSubject.subscribe({
      next: (coins) => this.updateCryptoOptions(coins),
    });
  }

  ngOnInit() {
    this.currencies = this.appService.currencies;
    this.selectedCurrency = this.currencies[0].code;
    this.appService.loadMarketCaps(this.selectedCurrency);
  }

  selectCurrency(newValue) {
    this.appService.loadMarketCaps(newValue);
  }

  filterChange(newValue) {
    this.appService.updateFilter(newValue);
  }

  updateCryptoOptions(coins) {
    this.cryptoCurrOptions = [];
    coins.forEach((coin, index) => {
      this.cryptoCurrOptions.push({
        id: index,
        name: coin.id.charAt(0).toUpperCase() + coin.id.slice(1)
      });
    });
  }

}
