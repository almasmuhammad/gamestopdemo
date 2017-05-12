import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from "@angular/http";

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

// for dev example only, remove when API is implemented
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';

import { environment } from '../../environments/environment';
import { ProfileModel } from './profile-model';

@Injectable()
export class UserService {

  constructor(private _http: Http) {
let s='';

   }

  getProfile(): Observable<ProfileModel>{
    // set url
    let url = environment.apiURL + 'profile';

    // options
    // this could be handled by abstraction
    // should we send application/text for CORS/Preflight and only run Get and Post methods?
    // hopefully a cookie is set to hold auth
    let headers = new Headers({ 'Content-Type': 'application/json' }); 
    let options = new RequestOptions({ headers: headers });

    // this could be handled by abstraction
    // map parms or body
    // call service
    // map on good return
    // catch errors, log, if 401 raise event

    let body = JSON.stringify({ });

    let profile = Observable.of(new ProfileModel()).delay(3000);
    return profile;

    // return this._http.post(url, body, options)
    //     .map((response: Response) => {
    //         return <ProfileModel>response.json();
    //     })
    //     .catch(e => {
    // this could be handled by abstraction
    //         if (e.status === 401) {
    //             return Observable.throw('Unauthorized');
    //         }
    //         // do any other checking for statuses here
    //     });
  }
}
