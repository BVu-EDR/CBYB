import { Component, OnInit } from '@angular/core';
import { Animations } from '../animations';

@Component({
  selector: 'app-collapse',
  templateUrl: './collapse.component.html',
  styleUrls: ['./collapse.component.css'],
  animations: [Animations.slideInOut]
})
export class CollapseComponent implements OnInit {

  constructor() { }

  isCollapsed: Boolean[] = [true, true, true, true, true, true, true, true];

  collapse(index: number) {
    for (var i = 0; i < this.isCollapsed.length; i++) {
      if (i == index) {
        this.isCollapsed[i] = !this.isCollapsed[i];
      }
      else {
        this.isCollapsed[i] = true;
      }
    }
  }

  ngOnInit() {
  }

}
