import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './input-with-custom-error.component.html',
  styleUrls: ['./input-with-custom-error.component.scss'],
})
export class InputWithCustomErrorComponent implements OnInit {
  controlledValue = '';
  errorMessage = '';

  constructor() {}

  ngOnInit(): void {}

  onBlur({ value, error }) {
    this.controlledValue = value;
    error ? (this.errorMessage = 'Custom error') : (this.errorMessage = null);
  }

  onChange({ value, error }) {
    this.controlledValue = value;
  }

  click() {
    console.log('Click');
  }
}
