import { NgModule, inject } from '@angular/core';
import { CanActivateChildFn, ResolveFn, Router, RouterModule, Routes } from '@angular/router';
import { ContactListComponent } from './contact-list-component/contact-list-component.component';
import { ContactService } from 'src/app/services/contact.service';
import Contact from 'src/app/models/Contact.model';
import { ContactResolverService } from 'src/app/resolve/ContactResolve.service';

const contactCanActivateFn: CanActivateChildFn = (route, state) => {
  if(!route?.params || !route?.params?.['id']){
    return false;
  }
  const service = inject(ContactService);
  const router = inject(Router);

  return service.getContactById(route.params['id'])
    ?.then(() => true)
    ?.catch(() => {
      router.navigate(['/error']);
      return false;
    });
}

const contactResolve: ResolveFn<Contact | undefined> = async (route, state) => {
  const contactId = route.paramMap.get('id');
  if(!contactId){
      return undefined;
  }
  return await inject(ContactService).getContactById(contactId);
}

const routes: Routes = [{
    path: '',
    component: ContactListComponent
  },
  {
    path: 'detail/:id',
    loadComponent: () => import('src/app/modules/contact-list/contact-detail/contact-detail.component')
      .then(m => m.ContactDetailComponent),
    canActivate: [contactCanActivateFn],
    // canActivate: [ContactGuardOldStyle],
    resolve: { data: contactResolve },
    //resolve: { data: ContactResolverService },
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactListRoutingModule { }
