import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { LocalstorageService } from './localstorage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loggedIn$ = new BehaviorSubject<Boolean>(false)

  constructor(
    private _localStorage: LocalstorageService,
    private _router: Router
  ) { }

  /**
   * ---
   * Auto Login
   * ---
   * @description This method is used to auto login a user
   * @returns {boolean}
   */
  autoLogin() {
    const user = this._localStorage.get('user');
    const token = this._localStorage.get('token');
    if ((user != null || user != undefined) && (token != null || token != undefined)) {
      return true;
    }
    return false;
  }

  /**
   * ---
   * AutoRedirect
   * ---
   * @description This method is used to auto redirect a user to home screen if token is present
   * @name autoRedirect
   * @returns {boolean}
   */
  autoRedirect() {
    const user = this._localStorage.get('user');
    const token = this._localStorage.get('token');
    if (user && token) {
      this._router.navigate(['home']);
      return true;
    }
    return false;
  }
}
