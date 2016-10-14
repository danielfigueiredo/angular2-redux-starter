import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {
  DevToolsExtension,
  NgRedux
} from 'ng2-redux';
import {NgReduxRouter} from 'ng2-redux-router';
import {
  routing,
  appRoutingProviders
} from './sample-app.routing';
import {
  FormsModule,
  FormBuilder,
  ReactiveFormsModule
} from '@angular/forms';
import {SampleApp} from './sample-app';
import {RacesPage} from '../pages';
import {NgReduxForms} from 'ng2-redux-form';

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    routing,
    CommonModule,
    NgReduxForms
  ],
  declarations: [
    SampleApp,
    RacesPage
  ],
  bootstrap: [
    SampleApp
  ],
  providers: [
    DevToolsExtension,
    FormBuilder,
    NgRedux,
    NgReduxRouter,
    appRoutingProviders
  ]
})
export class RioSampleAppModule {}
