import { _ } from 'meteor/underscore';
import { Contacts } from '../../api/contacts/contacts.js';

/**
 * A list of Stuff to pre-fill the Collection.
 * @type {*[]}
 */
const contactSeeds = [
  { first: 'Phillip', last: 'Johnson', address: 'blah', telephone: '704504343', email: 'johnson@gmail' },
  { first: 'Phillip', last: 'Johnson', address: 'blah', telephone: '704504343', email: 'johnson@gmail' },
  { first: 'Phillip', last: 'Johnson', address: 'blah', telephone: '704504343', email: 'johnson@gmail' },
  { first: 'Phillip', last: 'Johnson', address: 'blah', telephone: '704504343', email: 'johnson@gmail' },

];

/**
 * Initialize the Stuff collection if empty with seed data.
 */
if (Contacts.find().count() === 0) {
  _.each(contactSeeds, function seedContacts(stuff) {
    Contacts.insert(stuff);
  });
}
