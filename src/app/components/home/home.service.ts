import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/core/services/api.service';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private _apiService: ApiService) { }

  /**
   * --- 
   * Get Server Stats
   * ---
   * @name getServerStats
   * 
   */
  getServerStats() {
    return this._apiService.get('dashboard');
  }

  /**
   * ---
   * Get Server Health
   * ---
   * @name getServerHealth
   * @returns {Observable<any>}
   * @memberof HomeService
   */
  getServerHealth() {
    return this._apiService.get('server');
  }
}
