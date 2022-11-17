import { Component } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';

@Component({
  selector: 'app-daterangepicker',
  templateUrl: './daterangepicker.component.html',
  styleUrls: ['./daterangepicker.component.scss']
})
export class DaterangepickerComponent {

  range = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });


}
