import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import Contact from 'src/app/models/Contact.model';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-contact-list-component',
  templateUrl: './contact-list-component.component.html',
  styleUrl: './contact-list-component.component.scss',
})
export class ContactListComponent implements OnInit {

  contacts: Contact[] = [];
  private obsSubscription?: Subscription;

  constructor(
    private service: ContactService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.obsSubscription = this.service?.getOBSContacts()
      .subscribe((newContact) => {
        if (!this.contacts?.includes(newContact) && this.contacts?.length < 10) {
          this.contacts?.push(newContact);
        } else {
          console.log('Contatto scartato', newContact);
        }
      });
  }

  public viewContact(contact: Contact){
    this.router.navigate(['/contact-list/detail', contact.id])
  }

  ngOnDestroy(): void {
    this.obsSubscription?.unsubscribe();
  }
}
