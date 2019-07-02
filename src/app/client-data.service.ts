import {Injectable} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Injectable()
export class ClientDataService {

    name = '';
    email = '';
    city = '';
    neighborhood = '';
    document = '';
    personal_number = '';
    rootForm: FormGroup;

    constructor(private fb: FormBuilder) {
        this.rootForm = this.fb.group({
            childForm1 : this.fb.group({
                name: ['', Validators.required],
                email: ['', Validators.required],
            }),
            childForm2 : this.fb.group({
                city: ['', Validators.required],
                neighborhood: ['', Validators.required],
            }),
            childForm3 : this.fb.group({
                document: ['', Validators.required],
                personal_number: ['', Validators.required],
            })
        });
    }

}
