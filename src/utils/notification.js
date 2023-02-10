import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Notification = addedName =>
  toast.warn(`"${addedName}" is already in contacts`);

export const patternName =
  "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$";

export const patternNumber =
  '+?d{1,4}?[-.s]?(?d{1,3}?)?[-.s]?d{1,4}[-.s]?d{1,4}[-.s]?d{1,9}';

export const errorName = 'Name may contain only letters, apostrophe and spaces';

export const errorNumber = 'Phone number must be only digits';
