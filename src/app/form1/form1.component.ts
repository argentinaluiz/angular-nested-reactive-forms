import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ClientDataService} from '../client-data.service';

@Component({
    selector: 'app-form1',
    templateUrl: './form1.component.html',
    styleUrls: ['./form1.component.css']
})
export class Form1Component implements OnInit {

    constructor(private router: Router, private clientData: ClientDataService) {
        console.log(this.clientData)
    }

    ngOnInit() {
    }

    submit() {
        this.router.navigate(['form-2']);
    }
}
