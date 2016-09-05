import { Component, OnInit } from '@angular/core';
import { Artifact } from '../shared/artifact';
import { ArtifactService } from '../shared/artifact.service';
import { Router } from '@angular/router';
import { ROUTER_DIRECTIVES } from "@angular/router";

@Component({
  moduleId: module.id,
  selector: 'artifacts',
  templateUrl: 'artifact.component.html',
  styleUrls: ['artifact.component.css'],
  providers: [ArtifactService],
  directives: [ROUTER_DIRECTIVES]
})
export class ArtifactComponent implements OnInit {
  error: string;
  artifacts: Artifact[];
  constructor(private _artifactService: ArtifactService, private _router : Router) {
  }

  getArtifacts() {
    this._artifactService.getArtifacts()
      .subscribe(
      data => this.artifacts = data,
      error => console.log(error.json().error));
  }

  createArtifact(){
    this._router.navigate(['artifact/create']);
  }


  deleteArtifact(artifact: Artifact) {
    this.error = ''
    this._artifactService.deleteArtifact(artifact)
    .subscribe(
      res => this.artifacts = this.artifacts.filter(art => art !== artifact),
      error => this.error = 'Can\'t perform deletion!' 
      );

  }
  
  
  ngOnInit() {
    this.getArtifacts();
  }

}
