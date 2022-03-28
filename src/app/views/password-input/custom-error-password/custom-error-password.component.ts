import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './custom-error-password.component.html',
  styleUrls: ['./custom-error-password.component.scss'],
})
export class CustomErrorPasswordComponent implements OnInit {
  value = '';
  errorMessage: string = '';

  constructor() {}

  ngOnInit(): void {}

  onChange({ value, error }) {
    this.value = value;
  }

  onBlur({ value, error }) {
    this.value = value;
    error ? (this.errorMessage = 'Custom error') : (this.errorMessage = null);
  }
}
