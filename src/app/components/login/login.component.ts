import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { faUsersRays } from '@fortawesome/free-solid-svg-icons';
import { IUser, ILogin } from 'src/app/core/iuser';
import { AuthService } from 'src/app/core/services/auth.service';
import { LocalstorageService } from 'src/app/core/services/localstorage.service';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm : FormGroup;
  login = faUsersRays
  constructor(
    private _activatedRoute: ActivatedRoute,
    private _login: LoginService,
    private _localStorage: LocalstorageService,
    private _router: Router,
    private _authService: AuthService
  ) { 
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl('', [Validators.minLength(6), Validators.required])
    });
  }

  success = this._activatedRoute.snapshot.paramMap.get('registered');

  ngOnInit(): void { }

  onSubmit() {
    const data: any = this.loginForm.value;
    this._login.login(data).subscribe((response: any) => {
      console.log(response);
      if (response.success) {
        this._localStorage.setMany({
          token: response.data?.token,
          user: response.data?.user,
          role: response.data?.user.role
        });
        this._authService.loggedIn$.next(true);
        this._router.navigate(['/home']);
      }
    })
  }
}