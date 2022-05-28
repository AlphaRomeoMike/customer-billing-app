import { Injectable } from '@angular/core';
import { IBills } from 'src/app/core/ibills';
import { ApiService } from 'src/app/core/services/api.service';
import { AuthService } from 'src/app/core/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class BillService {

  constructor(
    private _authService: AuthService,
    private _apiService: ApiService
  ) { }

  /**
   * # Get bills
   * 
   * @name getBills
   * @description This method is used to get bills
   * @returns {Observable<any>}
   */
  getBills() {
    return this._apiService.get('bills');
  }
}
