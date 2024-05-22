import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Contact from 'src/app/models/Contact.model';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-contact-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact-detail.component.html',
  styleUrl: './contact-detail.component.scss',
})
export class ContactDetailComponent implements OnInit {

  contact?: Contact;

  constructor(
    private route: ActivatedRoute,
    private service: ContactService
  ) {}

  ngOnInit(): void {
    this.route.data.subscribe(values => {
      this.contact = (values?.['data']) ? values?.['data'] : this.createFakeContact();
    })
  }

  private waitWithoutResolve(){
    this.route?.params?.subscribe((params) => {
      if (params?.['id']) {
        this.service?.getContactById(params?.['id'])
          .then((contact) => (this.contact = contact))
          .catch((e) => {
            console.log(e);
            this.contact = this.createFakeContact()
          });
      }
    });
  }

  async awaitIdContact(id: string){
    this.contact = await this.service?.getContactById(id)
      .catch(this.createFakeContact);
  }

  createFakeContact(){
    return {
      email: '',
      id: '',
      name: '',
      phone: '',
    };
  }
}
