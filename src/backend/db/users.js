import { v4 as uuid } from 'uuid';
import { formatDate } from '../utils/authUtils';
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: uuid(),
    firstName: 'Adarsh',
    lastName: 'Balika',
    username: 'adarshbalika',
    password: 'adarshBalika123',
    createdAt: formatDate(),
    updatedAt: formatDate(),
    bio: 'I am Adarsh Balika and I can do no wrong',
  },
  {
    _id: uuid(),
    firstName: 'John',
    lastName: 'Doekar',
    username: 'JohnDoe',
    password: 'Sashaboi',
    createdAt: formatDate(),
    updatedAt: formatDate(),
    bio: 'I am John Doekar and I can do no wrong',
  },
  {
    _id: uuid(),
    firstName: 'Surya',
    lastName: 'K.S',
    username: 'suryxks',
    password: 'Sashaboi',
    createdAt: formatDate(),
    updatedAt: formatDate(),
    bio: 'I am Surya and I can do no wrong',
  },
  {
    _id: uuid(),
    firstName: 'Dan',
    lastName: 'C doods',
    username: 'reactDev',
    password: 'Sashaboi',
    createdAt: formatDate(),
    updatedAt: formatDate(),
    bio: 'I am Dan and I can do no wrong',
  },
];