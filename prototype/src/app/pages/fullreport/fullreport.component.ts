import { Component, OnInit } from '@angular/core';
import { Property } from '../../property';
import { inputLocation, initialInput } from '../../inputLocation';

// let signColor = document.getElementsByClassName('sign') as HTMLCollectionOf<HTMLElement>;

@Component({
  selector: 'app-fullreport',
  templateUrl: './fullreport.component.html',
  styleUrls: ['./fullreport.component.css']
})
export class FullreportComponent implements OnInit{
  propertyAddress: Property = inputLocation;

  constructor() { }

  ngOnInit() {
    // var signColor: HTMLCollectionOf<Element> = document.getElementsByClassName('sign');
    // for (var i = 0; i < signColor.length; i++ ) {
    //   console.log(signColor[i].innerHTML);
    //   if (signColor[i].innerHTML = "High") {
    //     console.log(i, signColor[i].innerHTML);
    //     signColor[i].className = "red";
    //   }
    //   if (signColor[i].innerHTML = "Medium") {
    //     console.log(i, signColor[i].innerHTML);
    //     signColor[i].className = "orange";
    //   }
    //   if (signColor[i].innerHTML = "Low") {
    //     console.log(i, signColor[i].innerHTML);
    //     signColor[i].className = "green";
    //   }
    // };
  }
}
