import { Pipe, PipeTransform } from "@angular/core";
import { PatientModel } from "../models/patient.model";

@Pipe({
    name: 'filter'
})
export class FilterPipe implements PipeTransform  {
    transform(value: Array<PatientModel>, tagFilter: string, valueFilter: string) : Array<PatientModel>
    {
        if (!!value && !!tagFilter && !!valueFilter) {
            return value.filter(
                patient => (patient[tagFilter]).toLowerCase() === valueFilter.toLowerCase());
        }

        return value;
    }

}