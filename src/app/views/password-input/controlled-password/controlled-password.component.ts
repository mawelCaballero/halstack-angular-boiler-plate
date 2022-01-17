import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './controlled-password.component.html',
  styleUrls: ['./controlled-password.component.scss']
})
export class ControlledPasswordComponent implements OnInit {

  value:string = '';

  constructor() { }

  ngOnInit(): void {
  }

  onChange(event) {
    this.value = event;
  }

  onBlur({ value, error }) {
    this.value = value;
  }

}
