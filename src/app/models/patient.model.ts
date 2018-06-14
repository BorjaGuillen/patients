
export class PatientModel {

	'id': number;
    'name': string;
	'surname': string;
	'birthdate': Date;
	'gender': string;
	'photo': string;
    'priority': string;

    constructor (name: string, surname: string,
                birthdate: Date, gender: string,
                photo: string, priority: string)
    {
        this.name = name;
        this.surname = surname;
        this.birthdate = birthdate;
        this.gender = gender;
        this.photo = photo;
        this.priority = priority;

        this.id = Math.floor(Math.random() * Math.pow(10,10));
    }

    public static keys() : Array<string> {
        return new Array<string>('name', 'surname', 'birthname', 'gender');
    }
   
}