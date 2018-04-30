import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ListComponent } from './components/list/list.component';
import { ListCardComponent } from './components/list-card/list-card.component';
import { SearchFilterComponent } from './components/search-filter/search-filter.component';
import { MultiselectDropdownModule } from 'angular-2-dropdown-multiselect';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ListComponent,
    ListCardComponent,
    SearchFilterComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MultiselectDropdownModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
