import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/core/services/api.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private _apiService: ApiService
  ) { }

  /**
   * ---
   * Login Submit Request
   * ---
   * @param data
   * @description This method is used to login a user
   * @returns {Observable<any>}
   */
  login(data: any) {
    return this._apiService.post('login', data);
  }
}
