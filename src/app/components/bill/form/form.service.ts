import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/core/services/api.service';

@Injectable({
  providedIn: 'root'
})
export default class FormService {

  constructor(private _apiService: ApiService) { }

  /**
   * # Get Users
   * 
   * @description Get required params for populating the form
   */
  populateForm() { 

  }
}
