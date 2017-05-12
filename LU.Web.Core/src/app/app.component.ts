import { Component } from '@angular/core';
import { HttpModule } from "@angular/http";

import { UserContextService } from './core/user-context.service';
import { UserService } from './core/user.service';
import { LoggerService } from './shared/logger.service';
import { WindowService } from './shared/window.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ 
    LoggerService, 
    WindowService, 
    { provide: UserService, useClass: UserService }, 
    UserContextService ]
})
export class AppComponent {
  
  constructor(public _userContextService: UserContextService) {
    _userContextService.getProfile();
  }
}
