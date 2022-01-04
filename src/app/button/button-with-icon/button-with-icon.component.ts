import { Component, OnInit } from '@angular/core';
import { ThemeDirective, ThemeService } from '@dxc-technology/halstack-angular';

@Component({
  templateUrl: './button-with-icon.component.html',
  styleUrls: ['./button-with-icon.component.scss']})
export class ButtonWithIconComponent implements OnInit {

  constructor() {
    console.log('ButtonWithIcon');

  }

  ngOnInit(): void {
  }

  onClick(event){
    console.log(event.target.value);
  }

}
