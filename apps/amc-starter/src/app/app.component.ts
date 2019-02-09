import { Component } from '@angular/core';
import { Contact } from '../app/models/contact';
import { CONTACT_DATA } from '../app/data/contact-data';

@Component({
  selector: 'trm-contacts-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class ContactsAppComponent {
  title = 'Angular Master Class';
  contacts: Contact[] = CONTACT_DATA;

/*   contact: Contact = {
    id: 6,
    name: 'Diana Ellis',
    email: '',
    phone: '',
    birthday: '',
    website: '',
    image: 'assets/images/6.jpg',
    address: {
      street: '6554 park lane',
      zip: '43378',
      city: 'Rush',
      country: 'United States'
    }
  } */
}
