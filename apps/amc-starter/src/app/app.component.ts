import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'trm-contacts-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class ContactsAppComponent implements OnInit {

  title = 'Angular Master Class';

  constructor() {
  }
  
  ngOnInit() {
  }

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
