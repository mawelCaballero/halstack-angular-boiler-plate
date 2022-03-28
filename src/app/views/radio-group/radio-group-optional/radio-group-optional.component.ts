import { Component, OnInit } from '@angular/core';
import { RadioItem } from '@dxc-technology/halstack-angular';

@Component({
  selector: 'app-radio-group-optional',
  templateUrl: './radio-group-optional.component.html',
})
export class RadioGroupOptionalComponent implements OnInit {
  options: RadioItem[] = [
    { label: 'Yes', value: 'Yes' },
    { label: 'No', value: 'No' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
