export interface ICurrency {
    key: string;
    rate: number;
    symbol: string;
}

export interface ITransfer {
    value: string;
    label: string;
}

export interface ISymbol {
    [key: string]: string;
}