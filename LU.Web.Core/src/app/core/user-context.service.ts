import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { ProfileModel } from './profile-model'; 
import { UserService } from './user.service';
import { LoggerService } from '../shared/logger.service';

@Injectable()
export class UserContextService {
//holds profile model and refreshes profile

 profileModel: ProfileModel;

  constructor(private _userService: UserService, private _logger: LoggerService) {
    const svc = _userService;
   }

 getProfile() : void {
   this._userService.getProfile().subscribe(profile =>
   {
     this.profileModel = profile;
   });
 }
}
