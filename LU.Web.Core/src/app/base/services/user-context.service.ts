import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { ProfileModel } from '../models/profile-model'; 
import { UserService } from './user.service';
import { LoggerService } from '../../shared/log/logger.service';

@Injectable()
export class UserContextService {
//holds profile model and refreshes profile

 profileModel: ProfileModel = null;

  constructor(private _userService: UserService, private _logger: LoggerService) {
    const svc = _userService;
   }

 getProfile() : void {
   this._userService.getProfile().subscribe(profile =>
   {
     if(profile != null){
      this.profileModel = profile;
     }
   },
   error=>{
     this.profileModel = null;
     this._logger.logError(error);
   });
 }
}
