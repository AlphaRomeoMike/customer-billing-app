import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/core/services/api.service';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(
    private _apiService: ApiService
  ) { }

  /**
   * ---
   * Register Request
   * ---
   * @param body
   * @description This method is used to register a user
   */
  register(body: any) {
    return this._apiService.post('register', body);
  }
}
