export class Ticket {

    constructor(public origin: string,
                public originName: string,
                public destination: string,
                public destinationName: string,
                public departureDate: string,
                public departureTime: string,
                public arrivalDate: string,
                public arrivalTime: string,
                public carrier: string,
                public stops: number,
                public price: number) {}
}