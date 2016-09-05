import { Component, OnInit } from '@angular/core';
import { Release } from '../shared/release';
import { ReleaseService } from '../shared/release.service';
import { Router } from '@angular/router';
import { ROUTER_DIRECTIVES } from "@angular/router";

@Component({
  moduleId: module.id,
  selector: 'release',
  templateUrl: 'release.component.html',
  styleUrls: ['release.component.css'],
  providers: [ReleaseService],
  directives: [ROUTER_DIRECTIVES]
  
})
export class ReleaseComponent implements OnInit {
releases: Release[];
  constructor(private _releaseService: ReleaseService, private _router : Router) { }

  ngOnInit() {
    this.getReleases();
  }

getReleases() {
    this._releaseService.getReleases()
      .subscribe(
      data => this.releases = data,
      error => console.log(error.json().error));
  }
}
