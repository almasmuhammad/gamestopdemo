/* Angular Library Modules  */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

/* App Root */
import { AppComponent } from './app.component';

/* Feature Modules */
import { CoreModule } from './core/core.module';
import { PagesModule } from './pages/pages.module';

/* Routing Module */
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    CoreModule.forRoot({}),
    PagesModule,
    AppRoutingModule
  ],
  declarations: [AppComponent ],
  bootstrap: [AppComponent]
})
export class AppModule { }
