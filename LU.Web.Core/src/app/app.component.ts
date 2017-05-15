import { Component } from '@angular/core';
import { HttpModule } from "@angular/http";

import { UserContextService } from './base/services/user-context.service';
import { UserService } from './base/services/user.service';
import { LoggerService } from './shared/log/logger.service';
import { WindowService } from './shared/window/window.service';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [ 
    LoggerService, 
    WindowService, 
    { provide: UserService, useClass: UserService }, 
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
