import {NgModule}      from '@angular/core';
import {CommonModule} from '@angular/common';
import {
  ReactiveFormsModule,
  FormsModule
} from '@angular/forms';
import {
  RioForm,
  RioFormGroup,
  RioFormError,
  RioInput,
  RioLabel
} from './index';
import {NgReduxForms} from 'ng2-redux-form';
import {provideReduxForms} from 'ng2-redux-form';
import {store} from '../../store';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    NgReduxForms
  ],
  declarations: [
    RioForm,
    RioFormGroup,
    RioFormError,
    RioLabel,
    RioInput
  ],
  providers: [
    provideReduxForms(store)
  ],
  exports: [
    RioForm,
    RioFormGroup,
    RioFormError,
    RioLabel,
    RioInput
  ]
})
export class RioFormModule { }
