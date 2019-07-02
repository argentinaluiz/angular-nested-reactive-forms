import {Component, OnInit} from '@angular/core';
import {ClientDataService} from '../client-data.service';

@Component({
    selector: 'app-form3',
    templateUrl: './form3.component.html',
    styleUrls: ['./form3.component.css']
})
export class Form3Component implements OnInit {

    constructor(private clientData: ClientDataService) {
    }

    ngOnInit() {
    }

    submit() {
        console.log(this.clientData);
    }

}
