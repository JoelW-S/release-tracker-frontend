import { Component } from '@angular/core';
import { ArtifactComponent } from './artifact/artifact.component';
import { ArtifactFormComponent } from './artifact-form/artifact-form.component';
import {ROUTER_DIRECTIVES } from '@angular/router';
import { NavbarComponent } from './navbar';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [NavbarComponent, ROUTER_DIRECTIVES]
})
export class AppComponent {
  title = 'Release Tracker';

 
}