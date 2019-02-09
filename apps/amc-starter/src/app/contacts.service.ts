import { Injectable } from '@angular/core';
import { CONTACT_DATA } from '../app/data/contact-data';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  constructor() { }
  getContacts() {
    return CONTACT_DATA;
  }
}
