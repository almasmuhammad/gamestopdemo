import { Component } from '@angular/core';
import { HttpModule } from "@angular/http";

import { UserContextService } from './base/services/userContext/user-context.service';
import { UserProfileService } from './base/services/userProfile/user-profile.service';
import { LoggerService } from './base/services/log/logger.service';
import { WindowService } from './base/services/window/window.service';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [ 
    LoggerService, 
    WindowService, 
    { provide: UserProfileService, useClass: UserProfileService }, 
    UserContextService ]
})
export class AppComponent {

  constructor(
    public _userContextService: UserContextService,
    private _logger: LoggerService) {
  }

  ngOnInit(){
    this.logSetup();
    this._userContextService.getProfile();

    }

  private logSetup(){
    this._logger.logInfo('Envrionment: ' + JSON.stringify(environment));
  }
}
