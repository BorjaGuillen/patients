import { Directive, Input, ElementRef } from '@angular/core';
import { Priority } from '../models/priority.model';

@Directive({
    selector: '[ctb-priority]'
})
export class PriorityDirective {
    @Input() priority : string;

    element: ElementRef = null

    constructor(element: ElementRef) {
        this.element = element;
    }

    ngOnInit() {
        let color = '#000000';

        switch(this.priority) {
            case Priority.CRITICAL:
                color = '#DF0101';
                break;
            case Priority.MEDIUM:
                color = '#D7DF01';
                break;
            case Priority.LOW:
                color = '#3ADF00';
                break;
            default:
                color = '#585858';
        }
        this.element.nativeElement.style.boxShadow = '2px 2px 10px ' + color;
    }
}