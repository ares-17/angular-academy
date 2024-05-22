import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, RouterStateSnapshot } from "@angular/router";
import { ContactService } from "../services/contact.service";

@Injectable({
    providedIn: 'root'
})
export class ContactGuardOldStyle implements CanActivate{

    constructor(private contactService: ContactService){ }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<GuardResult> {
        if(!route?.params || !route?.params?.['id']){
            return false;
          }
          return this.contactService.getContactById(route.params['id'])
            ?.then(() => true)
            ?.catch(() => false);
    }
    
}