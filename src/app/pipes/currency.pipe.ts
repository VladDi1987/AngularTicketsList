import { Pipe, PipeTransform } from '@angular/core';
import { ICurrency } from '../models/models';

@Pipe({
    name: 'currencyPipe'
})

export class CurrencyPipe implements PipeTransform {
    transform(value: number, param: ICurrency): string {
        return  Math.round(value * param.rate) + ' ' + param.symbol;
    }
}