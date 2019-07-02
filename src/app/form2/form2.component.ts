import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ClientDataService} from '../client-data.service';

@Component({
    selector: 'app-form2',
    templateUrl: './form2.component.html',
    styleUrls: ['./form2.component.css']
})
export class Form2Component implements OnInit {

    constructor(private router: Router, private clientData: ClientDataService) {
    }

    ngOnInit() {
    }

    submit() {
        this.router.navigate(['form-3']);
    }

}
