import { Component } from '@angular/core';
import { PatientService } from './services/patient.service';
import { PatientModel } from './models/patient.model';
import { Priority } from './models/priority.model';

@Component({
  selector: 'app-root'
  , templateUrl: './app.component.html'
  , styleUrls: ['./app.component.css']
})
export class AppComponent {
  title : string = 'Patients';
  patients : Array<PatientModel> = new Array<PatientModel>();

  priorities : Array<string> = Object.values(Priority);
  filters: Array<string> = PatientModel.keys();

  optionSelected : {
    'priority' : string,
    'filter' : string
  } = {
    'priority': '',
    'filter': ''
  }

  constructor(private patientService: PatientService) {
    this.patients = patientService.getAll();
  }

  onSelectionChange(event, filter) {
    this.optionSelected[filter] = event.value;
  }

  onUpdate(event) {
    alert(`Pacient to update: ${event.name}`);
  }

  onDelete(event) {
    alert(`Pacient to delete: ${event.name}`);
  }
}
