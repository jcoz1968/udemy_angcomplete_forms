import { Component, ViewChild } from '@angular/core';
import { Form, NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') subscriptionForm: NgForm;

  constructor() { }

  onSubmit() {
    console.log(this.subscriptionForm);
  }

}


  // defaultQuestion = 'pet';
  // answer = '';
  // genders = ['male', 'female'];
  // user = {
  //   username: '',
  //   email: '',
  //   secretQuestion: '',
  //   answer: '',
  //   gender: ''
  // };

  // submitted = false;

  // suggestUserName() {
  //   const suggestedName = 'Superuser';
  //   // this.signupForm.setValue({
  //   //   userData: {
  //   //     username: suggestedName,
  //   //     email: 'jcoz1968@gmail.com'
  //   //   },
  //   //   secret: 'pet',
  //   //   questionAnswer: '',
  //   //   gender: 'male'
  //   // });
  //   this.signupForm.form.patchValue({
  //     userData: {
  //       username: suggestedName
  //     }
  //   });
  // }

  // onSubmit() {
  //   this.submitted = true;
  //   this.user.username = this.signupForm.value.userData.username;
  //   this.user.email = this.signupForm.value.userData.email;
  //   this.user.secretQuestion = this.signupForm.value.secret;
  //   this.user.answer = this.signupForm.value.questionAnswer;
  //   this.user.gender = this.signupForm.value.gender;
  //   console.log(this.signupForm);

  //   this.signupForm.reset();
  // }

  // onSubmit(form: NgForm) {
  //   console.log(form);
  // }
