import { Component, OnInit } from '@angular/core';
import {ROUTER_DIRECTIVES, Router } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'navbar',
  templateUrl: 'navbar.component.html',
  styleUrls: ['navbar.component.css'],
  directives: [ROUTER_DIRECTIVES]
})
export class NavbarComponent implements OnInit {
  tabs = [
    { "name": "Home", active: false, "link": "" },
    { "name": "Artifact", "active": false, "link": "artifact" },
    { "name": "Release", "active": false, "link": "release" }
  ];
  isActive = false;
  constructor(private _router: Router) { }

  ngOnInit() { }

  selectTab(tab) {
    this.tabs.forEach((nav) => {
      nav.active = false;
    });
    tab.active = true;
  }
}
