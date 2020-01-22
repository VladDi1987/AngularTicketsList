import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Ticket } from '../../models/ticket.model';
import { StoreService } from '../../services/store.service';
import { Subscription } from 'rxjs';
import * as Models from '../../models/models';


@Component({
    selector: 'app-ticket',
    templateUrl: './ticket.component.html',
    styleUrls: ['./ticket.component.sass']
})
export class TicketComponent implements OnInit, OnDestroy {

    @Input() ticket: Ticket;
    private curValue$;
    public currentCurrencySub: Subscription;

    constructor(public storeService: StoreService) {
    }

    public ngOnInit(): void {
        this.currentCurrencySub = this.storeService.getCurrency().subscribe((currency: Models.ICurrency) => {
            this.curValue$ = currency;
        });
    }

    public ngOnDestroy(): void {
        this.currentCurrencySub.unsubscribe();
    }
}
