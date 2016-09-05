import { Injectable } from '@angular/core';
import { Artifact } from './artifact'
import { environment } from '../../app'
import { Http, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class ArtifactService {

  constructor(private _http: Http) { }

  getArtifacts(): Observable<Artifact[]> {
    
   return this._http.get(`${environment.releaseTrackerRestUrl}/artifact`)
    .map(res => res.json())
    .catch( error => Observable.throw(error));
    }

    addArtifact(artifact: Artifact): Observable<Artifact> {
      
    return this._http.post(`${environment.releaseTrackerRestUrl}/artifact`,artifact)
     .map(res => res.json())
     .catch(error => Observable.throw(error.json().error));
    }

     deleteArtifact(artifact: Artifact): Observable<Response> {
       console.log(artifact);
       let query = JSON.stringify(artifact);
      return this._http.delete(`${environment.releaseTrackerRestUrl}/artifact?query=${query}`)
      .map(res => res.status)
     .catch(error => Observable.throw(error))
    }
  }
