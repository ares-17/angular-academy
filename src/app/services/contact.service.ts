import { Injectable } from '@angular/core';
import { Observable, interval, map } from 'rxjs';
import Contact from '../models/Contact.model';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  private contactsObservable: Observable<Contact>;
  private contacts: Contact[] = [];

  constructor() {
    const names = [
      'John',
      'Emma',
      'Michael',
      'Sophia',
      'William',
      'Olivia',
      'James',
      'Ava',
      'Daniel',
      'Isabella',
    ];
    const lastNames = [
      'Smith',
      'Johnson',
      'Williams',
      'Jones',
      'Brown',
      'Davis',
      'Miller',
      'Wilson',
      'Moore',
      'Taylor',
    ];
    const domains = [
      'gmail.com',
      'yahoo.com',
      'outlook.com',
      'hotmail.com',
      'icloud.com',
    ];

    this.contactsObservable = interval(3000).pipe(
      map(() => {
        const randomName = names[Math.floor(Math.random() * names.length)];
        const randomLastName = lastNames[Math.floor(Math.random() * lastNames.length)];
        const randomDomain = domains[Math.floor(Math.random() * domains.length)];
        const randomEmail = `${randomName.toLowerCase()}.${randomLastName.toLowerCase()}@${randomDomain}`;
        const randomPhone = `(${Math.floor(Math.random() * 1000)}) ${Math.floor( Math.random() * 1000 )}-${Math.floor(Math.random() * 10000)}`;

        const contact = {
          id: (Math.random() * 100)?.toString(),
          name: randomName + ' ' + randomLastName,
          email: randomEmail,
          phone: randomPhone,
        };

        this.contacts.push(contact);
        return contact;
      })
    );
  }

  async getContactById(id: string): Promise<Contact> {
    await Promise.resolve(setTimeout(() => {}, 2000));
    const contact = this.contacts?.find((c) => c?.id === id);

    if (!contact) {
      throw new Error('Contact not found');
    }

    return contact;
  }

  getContactByIdNoAsync(id: string): Promise<Contact> {
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        resolve();
      }, 2000);
    }).then(() => {
      const contact = this.contacts?.find((c) => c?.id === id);

      if (!contact) {
        throw new Error('Contact not found');
      }

      return contact;
    });
  }

  getOBSContacts(): Observable<Contact> {
    return this.contactsObservable;
  }
}
