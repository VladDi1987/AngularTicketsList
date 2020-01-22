import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import * as Models from '../models/models';


@Injectable()
export class StoreService {

    public readonly defaultCurrency: Models.ICurrency = {key: 'RUB', rate: 1, symbol: 'P'};
    public selectedCurrency = new BehaviorSubject<Models.ICurrency>(this.defaultCurrency);

    constructor() {
    }

    public getCurrency(): Observable<Models.ICurrency>  {
        return this.selectedCurrency.asObservable();
    }

    public setCurrency(c: Models.ICurrency): void {
        this.selectedCurrency.next(c);
    }

}