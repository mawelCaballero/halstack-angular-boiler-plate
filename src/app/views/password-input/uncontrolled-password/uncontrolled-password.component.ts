import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './uncontrolled-password.component.html',
  styleUrls: ['./uncontrolled-password.component.scss']
})
export class UncontrolledPasswordComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onChange(event) {
    console.log(event);
  }

  onBlur({ value, error }) {
    console.log(value);
  }

}
