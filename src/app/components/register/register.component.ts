import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { faUserShield } from '@fortawesome/free-solid-svg-icons';
import { IUser, IRegister } from 'src/app/core/iuser';
import { RegisterService } from './register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  roles = ['USER', 'ADMIN'];
  loginForm: FormGroup;
  login = faUserShield
  constructor(
    private registerService: RegisterService,
    private _router: Router
  ) {
    this.loginForm = new FormGroup({
      name: new FormControl('', [Validators.minLength(3), Validators.required]),
      email: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl('', [Validators.minLength(6), Validators.required]),
      password_confirmation: new FormControl('', [Validators.required])
    });
  }

  ngOnInit(): void { }

  /**
   * ---
   * Register Submit
   * ---
   * @param form
   * @description This method is used to register a user
   * @returns {Observable<IRegister>}
   */
  onSubmit() {
    console.log(this.loginForm.value);
    const data: IUser = this.loginForm.value;
    data.role = this.roles[Math.floor(Math.random() * this.roles.length)];
    this.registerService.register(data).subscribe((response: IRegister) => {
      if (response.success) {
        this._router.navigate(['/login', { registered: true }]);
      }
    });
  }

}
