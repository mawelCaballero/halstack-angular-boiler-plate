import { Component, OnInit } from '@angular/core';
import { RadioItem } from '@dxc-technology/halstack-angular';

@Component({
  selector: 'app-radio-group-error',
  templateUrl: './radio-group-error.component.html',
})
export class RadioGroupErrorComponent implements OnInit {
  options: RadioItem[] = [
    { label: 'Option A', value: 'A' },
    { label: 'Option B', value: 'B' },
    { label: 'Option C', value: 'C' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
