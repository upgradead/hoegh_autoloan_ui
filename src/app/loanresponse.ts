export class LoanResponse{
    interest!: number;
    capital!: number;
    capitalLeft!: number;
    term!: number;

    constructor(interest: number,capital: number ,capitalLeft: undefined,term: undefined) {
        this.interest = interest;
        this.capital = capital;
    }

}