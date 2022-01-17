import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './input-with-pattern-constraint.component.html',
  styleUrls: ['./input-with-pattern-constraint.component.scss']
})
export class InputWithPatternConstraintComponent implements OnInit {

  controlledValue = "";

  constructor() {}

  ngOnInit(): void {
  }

  onBlur({ value, error }) {
    this.controlledValue = value;
  }

  onChange({ value, error }) {
    this.controlledValue = value;
  }

  click() {
    console.log("Click");
  }
}
