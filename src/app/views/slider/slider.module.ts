import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContinuousSliderModule } from './continuous-slider/continuous-slider.module';
import { ControlledSliderModule } from './controlled-slider/controlled-slider.module';
import { DisabledSliderModule } from './disabled-slider/disabled-slider.module';
import { DiscreteSliderModule } from './discrete-slider/discrete-slider.module';
import { SizedSliderModule } from './sized-slider/sized-slider.module';
import { SliderNoLimitValuesModule } from './slider-no-limit-values/slider-no-limit-values.module';
import { SliderWithInputModule } from './slider-with-input/slider-with-input.module';
import { UncontrolledSliderModule } from './uncontrolled-slider/uncontrolled-slider.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ContinuousSliderModule,
    ControlledSliderModule,
    DisabledSliderModule,
    DiscreteSliderModule,
    SizedSliderModule,
    SliderNoLimitValuesModule,
    SliderWithInputModule,
    UncontrolledSliderModule

  ]
})
export class SliderModule { }
