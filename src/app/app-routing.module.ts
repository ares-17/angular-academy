import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPageComponent } from './modules/error-page/error-page.component';

const routes: Routes = [
  { 
    path: '', 
    redirectTo: '/contact-list', 
    pathMatch: 'full',
  },
  {
    path: 'to-do-list',
    loadChildren: () => import('src/app/modules/to-do-list/to-do-list.module')
      .then(m => m.ToDoListModule)
  },
  {
    path: 'contact-list',
    loadChildren: () => import('src/app/modules/contact-list/contact-list.module')
      .then(m => m.ContactListModule)
  },
  { 
    path: 'error', 
    component: ErrorPageComponent 
  },
  { 
    path: '**', 
    redirectTo: '/error' 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
