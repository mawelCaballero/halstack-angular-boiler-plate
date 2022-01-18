import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './controlled-textarea.component.html',
  styleUrls: ['./controlled-textarea.component.scss']
})
export class ControlledTextareaComponent implements OnInit {

  value = "";

  constructor() {}

  ngOnInit(): void {
  }

  onChange(event) {
    this.value = event;
  }

  onBlur({ value, error }) {
    this.value = value;
  }

}
