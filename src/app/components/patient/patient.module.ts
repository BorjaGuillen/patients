import { CommonModule } from '@angular/common';
import { MatCardModule, MatButtonModule } from '@angular/material';

import { NgModule } from '@angular/core';

import { PatientComponent } from './patient.component';

@NgModule({
    declarations:
    [ PatientComponent
    ]
    , imports:
    [ CommonModule
      , MatCardModule
      , MatButtonModule
    ]
    , exports:
    [ PatientComponent
    ]
    , providers:
    []
})
export class PatientModule {}