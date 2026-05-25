const vidhubMatches = [
  'https://vidhub4.cc/*',
  'https://*.vidhub4.cc/*',
  'https://vidhub2.top/*',
  'https://*.vidhub2.top/*',
  'https://vidhub3.top/*',
  'https://*.vidhub3.top/*',
  'https://vidhub.tv/*',
  'https://*.vidhub.tv/*',
];

const testPageMatches = ['http://localhost/*', 'http://127.0.0.1/*'];

export const targetVideoMatches = [...vidhubMatches, ...testPageMatches];
