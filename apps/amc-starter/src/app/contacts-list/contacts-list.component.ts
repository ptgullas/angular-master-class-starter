import { Component, OnInit } from '@angular/core';
import { Contact } from '../models/contact';
import { ContactsService } from '../contacts.service';

@Component({
  selector: 'amc-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.css']
})
export class ContactsListComponent implements OnInit {

  contacts: Contact[];

  constructor(private contactsService: ContactsService) { }

  ngOnInit() {
    this.contacts = this.contactsService.getContacts();

  }

  trackContact(index, contact: Contact) {
    return contact? contact.id : undefined;
  }

}
