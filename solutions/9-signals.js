import _ from 'lodash';

const freeEmailDomains = [
  'gmail.com',
  'yandex.ru',
  'hotmail.com',
  'yahoo.com',
];

// BEGIN
const getFreeDomain = (email) => {
  const [, domain] = email.split('@');
  return _.includes(freeEmailDomains, domain) ? domain : null;
};

export default (emails) => {
  const domains = emails.map(getFreeDomain).filter((domain) => domain !== null);
  return _.countBy(domains);
};
// END