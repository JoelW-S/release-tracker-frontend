import { Injectable } from '@angular/core';
import { Release} from './release'
import { environment } from '../../app'
import { Http, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class ReleaseService {

  constructor(private _http: Http) { }

  getReleases(): Observable<Release[]> {
    
   return this._http.get(`${environment.releaseTrackerRestUrl}/release`)
    .map(res => res.json())
    .catch( error => Observable.throw(error));
    }

    getRelease(name: string): Observable<Release> {
   return this._http.get(`${environment.releaseTrackerRestUrl}/release/${name}`)
    .map(res => res.json())
    .catch( error => Observable.throw(error));
    }

    updateRelease(release: Release): Observable<Release> {
   return this._http.put(`${environment.releaseTrackerRestUrl}/release`, release)
    .map(res => res.json())
    .catch( error => Observable.throw(error.json().error));
    }
}
