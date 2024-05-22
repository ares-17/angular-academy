import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import Contact from '../models/Contact.model';
import { ContactService } from '../services/contact.service';

@Injectable({
  providedIn: 'root'
})
export class ContactResolverService implements Resolve<Contact | undefined> {

  constructor(private contactService: ContactService) {}

  async resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<Contact | undefined> {
    const contactId = route.paramMap.get('id');
    if(!contactId){
        return undefined;
    }
    return await this.contactService.getContactById(contactId);
  }
}
