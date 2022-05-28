import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IBills } from 'src/app/core/ibills';
import FormService from './form.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  form: any;
  bill?: IBills;
  param?: number;
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _formService: FormService
  ) {
    this._route.params.subscribe(params => {
      this.param = params['id'];
    });
  }

  ngOnInit(): void {

    this.form = new FormGroup({
      name: new FormControl(this.bill?.user.name),
      category_id: new FormControl(this.bill?.category.name),
      subcategory_id: new FormControl(this.bill?.subcategory.name),
      due_date: new FormControl(this.bill?.due_date),
      paid: new FormControl(this.bill?.paid),
      status: new FormControl(this.bill?.status),
      amount: new FormControl(this.bill?.status)
    });
  }

}
