export const cabanaTypes = {
  'DAY_PASS': 'Day Pass',
  'CABANA_BED': 'Cabana Bed',
  'DAYBED': 'Daybed',
  'SPA_PASS': 'Spa Pass',
};

export const typesFilter = [{
  type: cabanaTypes['DAY_PASS'],
  title: 'Day Passes',
}, {
  type: cabanaTypes['CABANA_BED'],
  title: 'Cabanas',
}, {
  type: cabanaTypes['DAYBED'],
  title: 'Day Beds',
}, {
  type: cabanaTypes['SPA_PASS'],
  title: 'Spa Passes',
},];

export const filters = [{
  title: 'Location',
  icon: 'map-marker',
}, {
  title: 'Date',
  icon: 'calendar',
}, {
  title: 'Guests',
  icon: 'users',
}, {
  title: 'Distance',
  icon: 'map-marker',
}, {
  title: 'Price',
  icon: 'usd',
},];

export const footerContent = [{
  title: 'DayAxe', 
  links: ['What is DayAxe?', 'About us', 'Press', 'How it Works', 'Help', 'Contact us'],
}, {
  title: 'Discover', 
  links: ['Gold Pass', 'Gift Cards', 'Free Daycations', 'Blog', 'Cities', 'Resorts'],
}, {
  title: 'Hotel Partners', 
  links: ['Why DayAxe?', 'Partner Login', 'Partner Sign Up', 'Refer Hotel'],
},];

export const headerNavbar = [{
  title: 'For Partners',
  to: '/for-partners',
}, {
  title: 'Help',
  to: '/help',
}, {
  title: 'How it Works',
  to: '/how-it-works',
}, {
  title: 'Login',
  to: '/login',
},]

export const footerNavbar = [{
  title: 'Terms',
  to: '/terms',
}, {
  title: 'Privacy',
  to: '/Privacy',
}, {
  title: 'Sitemap',
  to: '/sitemap',
},]

export const socialLinks = [{
  name: 'facebook',
  class: 'facebook',
  to: 'https://facebook.com'
}, {
  name: 'instagram',
  class: 'instagram',
  to: 'https://instagram.com'
}, {
  name: 'vimeo',
  class: 'vimeo',
  to: 'https://vimeo.com'
}, {
  name: 'linkedin',
  class: 'linkedin',
  to: 'https://linkedin.com'
},];
