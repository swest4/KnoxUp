import React from 'react';
import Page from '../../components/shared/page';
import Hero from '../../components/heroProject';
import ContactCards from '../../components/contactCards';

const contacts = [
  {
    name: 'Joyanna Hirst',
    social: [
      {
        type: 'email',
        value: 'joyannahirst@gmail.com',
      },
      {
        type: 'twitter',
        value: 'https://twitter.com/joyannahirst',
      },
      {
        type: 'linkedin',
        value: 'https://www.linkedin.com/in/joyanna-hirst-88ab5932/',
      },
    ],
  },
  {
    name: 'Lance Jernigan',
    social: [
      {
        type: 'email',
        value: 'lance@lancejernigan.com',
      },
      {
        type: 'linkedin',
        value: 'https://www.linkedin.com/in/lancejernigan',
      },
      {
        type: 'twitter',
        value: 'https://twitter.com/lance_jernigan',
      },
    ],
  },
  {
    name: 'Shane West',
    social: [
      {
        type: 'email',
        value: 'swest4@gmail.com',
      },
    ],
  },
];

export default () => (
  <Page>
    <Hero title="Contact" />
    <ContactCards contacts={contacts} />
  </Page>
);
