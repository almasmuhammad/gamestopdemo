import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// lazy loading use { path: 'heroes', loadChildren: 'app/hero/hero.module#HeroModule' }
const routes: Routes = [
  {
    path: '',
    children: []
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
