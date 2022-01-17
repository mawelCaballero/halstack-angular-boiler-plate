import { Component, Inject, OnInit } from '@angular/core';
import { ThemeService } from '@dxc-technology/halstack-angular';

@Component({
  selector: 'app-root',
  templateUrl: './text-input-with-suggestions.component.html',
  styleUrls: ['./text-input-with-suggestions.component.scss']
})
export class TextInputWithSuggestionsComponent implements OnInit {

  controlledValue = "";

  options: Array<any> = [
    "Afghanistan",
    "Albania",
    "Algeria",
    "Andorra",
    "Angola",
    "Antigua and Barbuda",
    "Bahamas",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Cabo Verde",
    "Cambodia",
    "Cameroon",
    "Canada",
    "Cayman Islands, The",
    "Central African Republic",
    "Chad",
    "Democratic Republic of the Congo",
    "Dominican Republic",
    "Dominica",
    "Denmark",
    "Djibouti"
  ];

  constructor(@Inject("ThemeService") private themeService: ThemeService) {}

  ngOnInit(): void {

  }

  onBlur({ value, error }) {
    this.controlledValue = value;
  }

  onChange(value) {
    this.controlledValue = value;
  }

}
