import {NgModule}      from '@angular/core';
import {CommonModule} from '@angular/common';
import {
  ReactiveFormsModule,
  FormsModule
} from '@angular/forms';
import {
  RioFormGroup,
  RioFormError,
  RioLabel
} from './index';
import {NgReduxForms} from 'ng2-redux-form';
import {NgRedux, NgReduxModule} from 'ng2-redux';
import {store} from '../../store';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    NgReduxForms,
    NgReduxModule,
  ],
  declarations: [
    RioFormGroup,
    RioFormError,
    RioLabel,
  ],
  exports: [
    RioFormGroup,
    RioFormError,
    RioLabel,
  ],
})
export class RioFormModule { }
