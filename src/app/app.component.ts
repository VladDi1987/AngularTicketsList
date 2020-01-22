import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
    title = 'AngularTicketsList';


    public transferAmount: string;

    constructor() {
    }

    ngOnInit() {
    }

    onTransferEmmit($event): void {
        this.transferAmount = $event;
    }

}
