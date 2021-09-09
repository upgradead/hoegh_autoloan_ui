import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { LoanService } from './loan.service';
import { LoanResponse } from './loanresponse';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor (private fb: FormBuilder,private _loanService: LoanService){}

  loans = ['car', 'house'];

  errorMsg = '';
  success = false;
  
  loanForm = this.fb.group ({
    mortgage : [532844], 
    maxMonthlyPay : [2520, Validators.required],
    terms: 25,
    loanType: ['car']
  });

   values:LoanResponse[] = [];

  onSubmit(){
    this._loanService.loan(this.loanForm.value).subscribe(
      response => {
        this.errorMsg = ''
        this.success = true
        this.values = []
        this.values = response;
      },
      error => {
        this.errorMsg = error.error.errorMessage
        this.success = false;
      }
    )
  }

}


