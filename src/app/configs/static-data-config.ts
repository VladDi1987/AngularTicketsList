import * as Models from '../models/models';

export class StaticDataConfig {
    static readonly startButton = {
        transferButton: 'all',
        currencyButton:  'RUB'
    };
    static  readonly currency: Array<Models.ICurrency> = [
        {key: 'RUB', rate: 1, symbol: 'P'},
        {key: 'USD', rate: 0.016, symbol: '$'},
        {key: 'EUR', rate: 0.013, symbol: '€'}
    ];
    static  readonly transfer: Array<Models.ITransfer> = [
        {value: 'all', label: 'Все'},
        {value: '0', label: 'Без пересадок'},
        {value: '1', label: '1 пересадка'},
        {value: '2', label: '2 пересадки'},
        {value: '3', label: '3 пересадки'}
    ];
}