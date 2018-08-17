import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { Animations } from '../animations';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css'],
  encapsulation: ViewEncapsulation.None,
  animations: [Animations.slideInOut]
})
export class TabsComponent implements OnInit {
  currentJustify = 'justified';
  public isCollapsed1 = true;
  public isCollapsed2 = true;
  public isCollapsed3 = true;

  private collapsed: boolean;

  constructor() {
    this.collapsed = true;
  }

  public isCollapsed(): boolean {
    return this.collapsed;
  }

  public setCollapsed(): void {
    this.collapsed = true;
  }

  public toggleMenu(): void {
    this.collapsed = !this.collapsed;
  }

  ngOnInit() {
  }

}
