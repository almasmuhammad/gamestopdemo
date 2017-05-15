import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from "@angular/http";

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

// for dev example only, remove when API is implemented
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';

import { environment } from '../../../../environments/environment';
import { ProfileModel } from '../../models/profile-model';
import { WindowService } from '../../../shared/window/window.service';

@Injectable()
export class UserProfileService {

  constructor(private _http: Http, private _windowService:WindowService) {}

  getProfile(): Observable<ProfileModel>{
    // set url
    let url = environment.apiURL + 'unauth';//'profile';

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

    let stubProfileModel = new ProfileModel();
    let profile = Observable.of(stubProfileModel).delay(500);

    //for sprint demo manual show only
    let returnProfileAsCreator = true;
    if (returnProfileAsCreator)
      stubProfileModel.isCreator = true;
    let callApiWith401 = true;
    let redirectToSSO = true;

    if (!callApiWith401)//remove after demo
      return profile;
    
    if(callApiWith401){//remove if condition after demo
      return this._http.get(url, options)
          .map((response: Response) => {
              return <ProfileModel>response.json();
          })
          .catch(e => {
              // this could be handled by abstraction
              if (e.status === 401) {
                if (redirectToSSO)//remove after demo
                  this._windowService.redirectToSSO();
                
                return Observable.of(null);// Observable.throw('Unauthorized');
              }
              // do any other checking for statuses here
          });
    }
  }

  //protected UnauthenticatedHandler()
}