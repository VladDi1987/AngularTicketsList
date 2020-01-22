import { Component, OnInit, Input } from '@angular/core';
import { TicketServices } from '../../services/ticket.services';
import { Ticket } from '../../models/ticket.model';

@Component({
    selector: 'app-ticket-list',
    templateUrl: './ticket-list.component.html',
    styleUrls: ['./ticket-list.component.sass']
})
export class TicketListComponent implements OnInit {

    public tickets: Ticket[];
    public isLoaded: boolean = false;
    @Input() transferAmount: string;


    constructor(private ticketService: TicketServices) {
    }

    ngOnInit() {
        this.getTickets();
    }

    public getTickets(): void {
        this.ticketService.getTickets().subscribe(tickets => {
            this.tickets = tickets;
            this.isLoaded = true;
        });
    }

}
