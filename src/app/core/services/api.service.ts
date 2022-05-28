import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LocalstorageService } from './localstorage.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  api: string = environment.url;
  constructor(
    private _http: HttpClient,
    private _localStorage: LocalstorageService,
  ) { }

  /**
   * ---
   * GET Request
   * ---
   * @param url
   * @param options
   * @returns {Observable<any>}
   * @description This method is used to make GET request to the server.
   */
  get(url: string, options?: any) {
    url = this.api + url;
    // check if token is available
    if (this._localStorage.check('token')) {
      // set token to header
      return this._http.get(url, {
        headers: {
          'Authorization': `Bearer ${this._localStorage.get('token')}`,
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
      });
    } else {
      return this._http.get(url, {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
      });
    }
  }

  /**
   * ---
   * POST Request
   * ---
   * @param url
   * @param body
   * @param options
   * @returns {Observable<any>}
   * @description This method is used to make POST request to the server.
   */
  post(url: string, body: any, options?: any) {
    url = this.api + url;
    // check if token is available
    if (this._localStorage.check('token')) {
      // set token to header
      return this._http.post(url, body, {
        headers: {
          'Authorization': `Bearer ${this._localStorage.get('token')}`,
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
      });
    } else {
      return this._http.post(url, body, {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
      });
    }
  }

  /**
   * ---
   * PUT Request
   * ---
   * @param url
   * @param body
   * @param options
   * @returns {Observable<any>}
   * @description This method is used to make PUT request to the server.
   */
  put(url: string, body: any, options?: any) {
    url = this.api + url;
    // check if token is available
    if (this._localStorage.check('token')) {
      // set token to header
      return this._http.put(url, body, {
        headers: {
          'Authorization': `Bearer ${this._localStorage.get('token')}`,
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
      });
    } else {
      return this._http.put(url, body, {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
      });
    }
  }

  /**
   * ---
   * DELETE Request
   * ---
   * @param url
   * @param options
   * @returns {Observable<any>}
   * @description This method is used to make DELETE request to the server.
   */
  delete(url: string, options?: any) {
    url = this.api + url;
    // check if token is available
    if (this._localStorage.check('token')) {
      // set token to header
      return this._http.delete(url, {
        headers: {
          'Authorization': `Bearer ${this._localStorage.get('token')}`,
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
      });
    } else {
      return this._http.delete(url, {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
      });
    }
  }
}
