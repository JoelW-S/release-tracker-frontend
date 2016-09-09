import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, FORM_DIRECTIVES,
  REACTIVE_FORM_DIRECTIVES }
from '@angular/forms';
import {ROUTER_DIRECTIVES, Router} from "@angular/router";
import { Artifact } from '../shared/artifact';
import {ArtifactService} from '../shared/artifact.service';

@Component({
  moduleId: module.id,
  selector: 'app-artifact-form',
  templateUrl: 'artifact-form.component.html',
  styleUrls: ['artifact-form.component.css'],
  providers: [ArtifactService, FormBuilder],
  directives: [FORM_DIRECTIVES, REACTIVE_FORM_DIRECTIVES]
})
export class ArtifactFormComponent implements OnInit {
  artifactForm: FormGroup;
  submitted = false;
  artifact: Artifact;
  error: string;
  constructor(private _artifactService: ArtifactService, private _fb: FormBuilder, private _router: Router) {
    this.artifactForm = this._fb.group({
      groupId: ["", Validators.required],
      artifactId: ["", Validators.required],
      version: ["", Validators.required]
    });
  }

  ngOnInit() {
  }

  addArtifact() {
    this.artifact = undefined;
    this.error = '';
    this.submitted = true;
    let newArtifact = new Artifact(this.artifactForm.controls['groupId'].value,
      this.artifactForm.controls['artifactId'].value,
      this.artifactForm.controls['version'].value);
    this._artifactService.addArtifact(newArtifact).subscribe(
      data => this.artifact = data,
      error => this.error = error)
    return false;
  }

  goToArtifacts(){
    this._router.navigate(['/artifact']);
  }
}

