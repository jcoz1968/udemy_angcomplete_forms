import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-assignment-form',
  templateUrl: './assignment-form.component.html',
  styleUrls: ['./assignment-form.component.css']
})
export class AssignmentFormComponent implements OnInit {
  @ViewChild('f') subscriptionForm: NgForm;

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.subscriptionForm);
  }

}
