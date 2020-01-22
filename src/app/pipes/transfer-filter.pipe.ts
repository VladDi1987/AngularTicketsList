import { Pipe, PipeTransform } from '@angular/core';
import { Ticket } from '../models/ticket.model';

@Pipe({
    name: 'ticketFilter'
})

export class TransferFilterPipe implements PipeTransform {
    transform(tickets: Array<Ticket>, prop: any): Array<Ticket> {

        if (!tickets) return [];
        if (!isFinite(prop)) return tickets;

        return tickets.filter(ticket => {
            return ticket.stops === +prop;
        });

    }
}