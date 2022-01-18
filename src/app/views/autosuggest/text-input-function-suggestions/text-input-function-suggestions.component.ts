import { Component, Inject, OnInit } from '@angular/core';
import { ThemeService } from '@dxc-technology/halstack-angular';
import { of } from 'rxjs';
import { switchMap, delay } from "rxjs/operators";

@Component({
  selector: 'app-root',
  templateUrl: './text-input-function-suggestions.component.html',
  styleUrls: ['./text-input-function-suggestions.component.scss']
})
export class TextInputFunctionSuggestionsComponent implements OnInit {

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

  constructor(@Inject("ThemeService") private themeService: ThemeService) {
    this.callbackFunc = this.callbackFunc.bind(this);
  }

  ngOnInit(): void {

  }

  onBlur({ value, error }) {
    this.controlledValue = value;
  }

  onChange(value) {
    this.controlledValue = value;
  }

  callbackFunc(newValue) {
    const newOptions = this.options.filter((option) =>
      option.toUpperCase().includes(newValue.toUpperCase())
    );
    return of(newOptions).pipe(
      switchMap((options) => of(options).pipe(delay(1000)))
    );
  }
}