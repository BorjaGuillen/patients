import { PatientModel } from 'src/app/models/patient.model';
import { Priority } from 'src/app/models/priority.model';

export class PatientService {

    patients : Array<PatientModel> = new Array<PatientModel>(
        new PatientModel('Name1', 'Surname1', new Date('08/05/1983'), 'Female', './assets/img2.jpg', Priority.CRITICAL)
        , new PatientModel('Name2', 'Surname2', new Date('06/23/1977'), 'Male', './assets/img1.jpg', Priority.LOW)
    );
    
    getAll() {
        return this.patients;
    }

    getById(id: number) {
        return this.patients.find(
            patient => patient.id === id)
    }

}