import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IBills } from 'src/app/core/ibills';
import { IUser } from 'src/app/core/iuser';
import { AuthService } from 'src/app/core/services/auth.service';
import { LocalstorageService } from 'src/app/core/services/localstorage.service';
import { BillService } from './bill.service';

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.scss']
})
export class BillComponent implements OnInit {

  status = this._authService.loggedIn$
  role: string | null;
  bills?: IBills[];

  constructor(
    private _router: Router,
    private _authService: AuthService,
    private _localStorageService: LocalstorageService,
    private _billService: BillService
  ) {
    this.role = this._localStorageService.get('role');
    this._billService.getBills().subscribe((response: any) => {
      let bills: IBills[] = response.data;
      this.bills = bills;
      console.log(bills);
    })
  }

  ngOnInit(): void { }

  /**
   * # Navigate to bills page
   * 
   * @name navigateToBills
   * @description This method is used to navigate to add bills page
   * @returns {void}
   */
  navigateToAddBills() {
    this._router.navigate(['/bills/add']);
  }

  /**
   * # Navigate to single bill page
   * 
   * @name navigateToBill
   * @param {IBills} bill
   * @description This method is used to navigate to single bill page
   */
  navigateToBill(bill: IBills) {
    this._router.navigate(['/bills/' + bill.id]);
  }

}
