import { Component, OnInit } from '@angular/core';
import { RadioItem } from '@dxc-technology/halstack-angular';

@Component({
  selector: 'app-radio-group-controlled',
  templateUrl: './radio-group-controlled.component.html',
})
export class RadioGroupControlledComponent implements OnInit {
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
  constructor() {}

  ngOnInit(): void {}

  value = '';
  handleOnChange($event) {
    this.value = $event;
  }
  handleOnBlur(event) {
    console.log('onBlur event: ', event);
  }
}
