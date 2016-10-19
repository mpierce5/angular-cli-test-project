import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-navigation-component',
  templateUrl: './header-navigation-component.component.html',
  styleUrls: ['./header-navigation-component.component.css']
})
export class HeaderNavigationComponentComponent implements OnInit {
  pageTitle: string = 'Navigation Component';
  constructor() { }

  ngOnInit() {
  }

}
