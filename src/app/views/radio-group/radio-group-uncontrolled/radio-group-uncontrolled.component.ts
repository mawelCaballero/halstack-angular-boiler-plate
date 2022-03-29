import { Component, OnInit } from '@angular/core';
import { RadioItem } from '@dxc-technology/halstack-angular';
@Component({
  selector: 'app-radio-group-uncontrolled',
  templateUrl: './radio-group-uncontrolled.component.html',
})
export class RadioGroupUncontrolledComponent implements OnInit {
  options: RadioItem[] = [
    {
      label: 'Label1',
      value: '1',
    },
    {
      label: 'Label2',
      value: '2',
    },
    {
      label: 'Label3',
      value: '3',
    },
  ];

  options2: RadioItem[] = [
    {
      label: 'Label1',
      value: '1',
    },
    {
      label: 'Label2',
      value: '2',
      disabled: true,
    },
    {
      label: 'Label3',
      value: '3',
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  handleOnBlur(value) {
    console.log(value);
  }
}
