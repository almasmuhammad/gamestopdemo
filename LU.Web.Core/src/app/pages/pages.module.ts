import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { routing } from './pages-routing';

import { PagesComponent } from './pages.component';
import { UserService } from '../base/services/profile/user.service';
import { UserContextService } from '../base/services/profile/user-context.service';

@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  declarations: [PagesComponent],
  providers: [UserService, UserContextService]
})
export class PagesModule { }
