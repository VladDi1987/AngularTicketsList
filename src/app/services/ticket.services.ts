import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UrlService } from './url.services';
import { Ticket } from '../models/ticket.model';

@Injectable()
export class TicketServices {

    constructor(private http: HttpClient,
                private urlService: UrlService) {
    }

    getTickets(): Observable<Ticket[]> {
        return this.http.get<Ticket[]>(this.urlService.ticketsUrl);
    }
}