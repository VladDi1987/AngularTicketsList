import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ScrollingModule } from '@angular/cdk/scrolling';

import { AppComponent } from './app.component';
import { TicketComponent } from './components/ticket/ticket.component';
import { SearchComponent } from './components/search/search.component';
import { HeaderComponent } from './components/header/header.component';
import { TicketListComponent } from './components/ticket-list/ticket-list.component';

import { UrlService } from './services/url.services';
import { TicketServices } from './services/ticket.services';
import { StoreService } from './services/store.service';

import { TransferFilterPipe } from './pipes/transfer-filter.pipe';
import { CurrencyPipe } from './pipes/currency.pipe';

@NgModule({
    declarations: [
        AppComponent,
        TicketComponent,
        SearchComponent,
        HeaderComponent,
        TicketListComponent,
        TransferFilterPipe,
        CurrencyPipe
    ],
    imports: [
        BrowserModule,
        ScrollingModule,
        FormsModule,
        HttpClientModule
    ],
    providers: [
        UrlService,
        TicketServices,
        StoreService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
