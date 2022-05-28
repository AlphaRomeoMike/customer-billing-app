import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { forkJoin } from 'rxjs';
import { IStats } from 'src/app/core/istats';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  health: any;
  stats: any;
  constructor(
    private _homeService: HomeService,
    private _router: Router
  ) {
    forkJoin({
      server: this._homeService.getServerHealth(),
      stats: this._homeService.getServerStats()
    }).subscribe(
      (response: any) => {
        this.health = response.server.message;
        this.stats = response['stats']['data'];
      }
    );
  }

  ngOnInit(): void { }

  /**
   * # Navigate to bills page
   * 
   * @name navigateToBills
   * @description This method is used to navigate to bills page
   * @returns {void}
   */
  navigateToBills() {
    this._router.navigate(['/bills']);
  }
}
