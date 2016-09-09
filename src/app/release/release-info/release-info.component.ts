import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators, FormBuilder, FORM_DIRECTIVES,
  REACTIVE_FORM_DIRECTIVES }
from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Release } from '../../shared/release';
import { Artifact } from '../../shared/artifact';
import { ReleaseService } from '../../shared/release.service'

@Component({
  moduleId: module.id,
  selector: 'release-info',
  templateUrl: 'release-info.component.html',
  styleUrls: ['release-info.component.css'],
  providers: [ReleaseService],
  directives: [REACTIVE_FORM_DIRECTIVES]
})
export class ReleaseInfoComponent implements OnInit {
  releaseForm: FormGroup;
  release: Release;

  constructor(private _releaseService: ReleaseService, private _current: ActivatedRoute, private _router: Router) { }

  ngOnInit() {
    this._current.params.subscribe(params => {
      this._releaseService.getRelease(params['name']).subscribe(
        data => this.release = data
      )
    });
  }

  goToReleases() {
    this._router.navigate(['/release']);
  }

}