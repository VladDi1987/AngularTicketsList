import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { StoreService } from '../../services/store.service';
import * as Models from '../../models/models';
import * as Config from '../../configs/general-config';


@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.sass']
})
export class SearchComponent implements OnInit {

    public currentTransfer = Config.StaticDataConfig.startButton.transferButton;
    public selectedCurrency = Config.StaticDataConfig.startButton.currencyButton;
    public currency: Array<Models.ICurrency> = Config.StaticDataConfig.currency;
    public transfer: Array<Models.ITransfer> = Config.StaticDataConfig.transfer;

    @Output() transferEmitter = new EventEmitter<string>();

    constructor(public storeService: StoreService) {
    }

    ngOnInit() {
    }

    public onTransferChange(model: string): void {
        this.transferEmitter.emit(model);
    }

    public onCurrencyChange(key: string, rate: number, symbol: string): void {
        this.storeService.setCurrency({key, rate, symbol});
    }


}
