import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Release } from '../../shared/release';
import { Artifact } from '../../shared/artifact';
import { ReleaseService } from '../../shared/release.service'

@Component({
  moduleId: module.id,
  selector: 'release-info',
  templateUrl: 'release-info.component.html',
  styleUrls: ['release-info.component.css'],
  providers: [ReleaseService]
})
export class ReleaseInfoComponent implements OnInit {
release: Release;

  constructor(private _releaseService: ReleaseService, private _current: ActivatedRoute, private _router : Router) { }

  ngOnInit() {
    this._current.params.subscribe(params => {
     this._releaseService.getRelease(params['name']).subscribe(
       data => this.release = data 
     );
  });
  }

  goToReleases() {
    this._router.navigate(['/release']);
  }

}