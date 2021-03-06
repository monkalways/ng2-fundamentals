import { Component, OnInit, Injectable, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { TOASTR_TOKEN } from '../../shared/toastr.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profileForm: FormGroup;
  private firstName: FormControl;
  private lastName: FormControl;

  constructor(private authService: AuthService, private router: Router, @Inject(TOASTR_TOKEN) private toastr: any) { }

  ngOnInit() {
    this.firstName = new FormControl(
      this.authService.currentUser.firstName, 
      [ 
        Validators.required, 
        Validators.pattern('[a-zA-z].*')
      ]);
    this.lastName = new FormControl(
      this.authService.currentUser.lastName, 
      [
        Validators.required,
        Validators.pattern('[a-zA-z].*')
      ]);
    this.profileForm = new FormGroup({
      firstName: this.firstName,
      lastName: this.lastName
    })
  }

  saveProfile(formValues) {
    if(this.profileForm.valid) {
      this.authService.updateCurrentUser(formValues.firstName, formValues.lastName);
      // this.router.navigateByUrl('/events');
      this.toastr.success("Profile Saved");
    }
  }

  cancel() {
    this.router.navigateByUrl('/events');
  }

  isFirstNameInvalid() {
    return this.firstName.invalid && this.firstName.touched;
  }

  isLastNameInvalid() {
    return this.lastName.invalid && this.lastName.touched;
  }

}
