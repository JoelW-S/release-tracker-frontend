import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import {HTTP_PROVIDERS} from '@angular/http'; import 'rxjs/Rx';
import { disableDeprecatedForms, provideForms } from '@angular/forms';
import { AppComponent, environment } from './app/';
import { HomeComponent } from './app/home/home.component';
import { provideRouter } from '@angular/router';
import { ArtifactComponent } from './app/artifact/artifact.component';
import { ReleaseComponent } from './app/release/release.component';
import { ReleaseInfoComponent } from './app/release/release-info/release-info.component';
import { ArtifactFormComponent } from './app/artifact-form/artifact-form.component';

if (environment.production) {
  enableProdMode();
}

bootstrap(AppComponent, [disableDeprecatedForms(),
  provideForms(),HTTP_PROVIDERS, provideRouter([
  { path: '', component: HomeComponent },
  { path: 'artifact', component: ArtifactComponent },
  { path: 'artifact/create', component: ArtifactFormComponent },
  { path: 'release', component: ReleaseComponent },
  { path: 'release/info/:name', component: ReleaseInfoComponent }
])]);