import { Component, Input, Output, EventEmitter } from '@angular/core';
import { PatientModel } from 'src/app/models/patient.model';

import * as moment from 'moment';

@Component({
    selector: 'ctb-patient'
    , templateUrl: './patient.component.html'
    , styleUrls: ['./patient.component.css']
})
export class PatientComponent {
    @Input() patient : PatientModel;

    @Output() update : EventEmitter<PatientModel> = new EventEmitter<PatientModel>();
    @Output() delete : EventEmitter<PatientModel> = new EventEmitter<PatientModel>();

    age : number = 0;

    // ngOnChanges() {
    //     console.log('ngOnChanges. First');  
    // }
    ngOnInit() {
        // console.log('ngOnInit. Second');
        this.age = moment.duration(
            moment().diff(moment(this.patient.birthdate))).years();
    }

    // ngDoCheck() {
    //     console.log('ngDoCheck. Third, Sixth, ...');
    // }
    // getAges() {
    //     console.log('getAges---. Forth and Fifth, Seventh and Eigth, ...');
    // }

    // ngOnDestroy() {
    //     console.log('ngOnDestroy... Last');
    // }

    onUpdate() {
        this.update.emit(this.patient);
    }
    onDelete() {
        this.delete.emit(this.patient);
    }
}