import { Component } from '@angular/core';
import { Property } from '../property';
import { initialInput } from '../inputLocation'

@Component({
  selector: 'app-address-form',
  templateUrl: './address-form.component.html',
  styleUrls: ['./address-form.component.css']
})
export class AddressFormComponent {
  model = initialInput;
}