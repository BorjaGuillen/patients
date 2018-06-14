import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule, MatSelectModule, MatInputModule } from '@angular/material';

import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PatientModule } from './components/patient/patient.module';
import { PriorityDirective } from './shared/priority.directive';
import { FilterPipe } from './shared/filter.pipe';

import { PatientService } from './services/patient.service';

@NgModule({
  declarations:
  [ AppComponent
    , PriorityDirective
    , FilterPipe
  ]
  , imports:
  [ BrowserModule
    , BrowserAnimationsModule
    , CommonModule
    , MatFormFieldModule
    , MatSelectModule
    , MatInputModule
    , PatientModule
  ]
  , providers:
  [ PatientService
  ]
  , bootstrap: [AppComponent]
})
export class AppModule { }
