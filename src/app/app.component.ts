import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faDollar } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from './core/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Customer Billing Application';
  money = faDollar;
  data = this._authService.loggedIn$;

  constructor(
    private _router: Router,
    private _authService: AuthService
  ) {
    this._authService.autoRedirect();
    console.log(this.data);
    
  }

  ngOnInit(): void {
    if (this._authService.autoLogin()) {
      this._router.navigate(['/home']);
    }
  }

  navigate() {
    this._router.navigate(['/register']);
  }
}
