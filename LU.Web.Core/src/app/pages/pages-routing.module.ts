import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';
import { ModuleWithProviders } from '@angular/core';

export const routes: Routes = [
  { path: 'pages', redirectTo: 'home', pathMatch: 'full' }

//     path: 'pages',
//     component: Pages,
//     children: [
//       { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
//       { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
//       { path: 'editors', loadChildren: './editors/editors.module#EditorsModule' },
//       { path: 'components', loadChildren: './components/components.module#ComponentsModule' },
//       { path: 'charts', loadChildren: './charts/charts.module#ChartsModule' },
//       { path: 'ui', loadChildren: './ui/ui.module#UiModule' },
//       { path: 'forms', loadChildren: './forms/forms.module#FormsModule' },
//       { path: 'tables', loadChildren: './tables/tables.module#TablesModule' },
//       { path: 'maps', loadChildren: './maps/maps.module#MapsModule' }
//     ]
//   }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
