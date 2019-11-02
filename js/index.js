const siteContent = {
  nav: {
    'nav-item-1': 'Services',
    'nav-item-2': 'Product',
    'nav-item-3': 'Vision',
    'nav-item-4': 'Features',
    'nav-item-5': 'About',
    'nav-item-6': 'Contact',
    'img-src': 'img/logo.png'
  },
  cta: {
    h1: 'DOM Is Awesome',
    button: 'Get Started',
    'img-src': 'img/header-img.png'
  },
  'main-content': {
    'features-h4': 'Features',
    'features-content':
      'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'about-h4': 'About',
    'about-content':
      'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'middle-img-src': 'img/mid-page-accent.jpg',
    'services-h4': 'Services',
    'services-content':
      'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'product-h4': 'Product',
    'product-content':
      'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'vision-h4': 'Vision',
    'vision-content':
      'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'
  },
  contact: {
    'contact-h4': 'Contact',
    address: '123 Way 456 Street Somewhere, USA',
    phone: '1 (888) 888-8888',
    email: 'sales@greatidea.io'
  },
  footer: {
    copyright: 'Copyright Great Idea! 2018'
  }
};

// Example: Update the img src for the logo
let logo = document.getElementById('logo-img');
logo.setAttribute('src', siteContent['nav']['img-src']);

let header = document.getElementById('cta-img');
header.setAttribute('src', siteContent['cta']['img-src']);

let middle = document.getElementById('middle-img');
middle.setAttribute('src', siteContent['main-content']['middle-img-src']);
//title
let titleText = document.querySelector('h1');
let textH1 = siteContent.cta.h1.split(' ');
titleText.innerHTML = `${textH1[0]} <br> ${textH1[1]} <br> ${textH1[2]} `;

let buttonC = document.querySelector('button');
buttonC.addEventListener('click', event => {
  alert('Hello');
});
buttonC.textContent = siteContent['cta']['button'];

let navItems = document.querySelectorAll('a');
navItems.forEach(nav => {
  nav.style.color = 'blue';
});

navItems[0].textContent = siteContent['nav']['nav-item-1'];
// navItems[0].style.color = 'blue';
navItems[1].textContent = siteContent['nav']['nav-item-2'];
// navItems[1].style.color = 'blue';
navItems[2].textContent = siteContent['nav']['nav-item-3'];
// navItems[2].style.color = 'blue';
navItems[3].textContent = siteContent['nav']['nav-item-4'];
// navItems[3].style.color = 'blue';
navItems[4].textContent = siteContent['nav']['nav-item-5'];
// navItems[4].style.color = 'blue';
navItems[5].textContent = siteContent['nav']['nav-item-6'];
// navItems[5].style.color = 'blue';
//main content
let featureTitle = document.querySelectorAll('.text-content h4');
featureTitle[0].textContent = siteContent['main-content']['features-h4'];
featureTitle[0].style.color = 'red';
featureTitle[1].textContent = siteContent['main-content']['about-h4'];
featureTitle[1].style.color = 'red';
featureTitle[2].textContent = siteContent['main-content']['services-h4'];
featureTitle[2].style.color = 'red';
featureTitle[3].textContent = siteContent['main-content']['product-h4'];
featureTitle[3].style.color = 'red';
featureTitle[4].textContent = siteContent['main-content']['vision-h4'];
featureTitle[4].style.color = 'red';

let paragraph = document.querySelectorAll('.text-content p');
paragraph[0].textContent = siteContent['main-content']['features-content'];
paragraph[1].textContent = siteContent['main-content']['about-content'];
paragraph[2].textContent = siteContent['main-content']['services-content'];
paragraph[3].textContent = siteContent['main-content']['product-content'];
paragraph[4].textContent = siteContent['main-content']['vision-content'];

//contact
let contactH4 = document.querySelectorAll('.contact h4');
contactH4[0].textContent = siteContent['contact']['contact-h4'];

let addressp = document.querySelectorAll('.contact p');
let addressH4 = siteContent.contact.address.split(' ');
console.log(addressH4);
addressp[0].innerHTML = `${addressH4[0]} ${addressH4[1]} ${addressH4[2]}      
${addressH4[3]} <br> ${addressH4[4]} ${addressH4[5]}`;
//addressp[0].textContent = siteContent['contact']['address'];
addressp[1].textContent = siteContent['contact']['phone'];
addressp[2].textContent = siteContent['contact']['email'];
//footer

let footerc = document.querySelector('footer p');
footerc.textContent = siteContent['footer']['copyright'];
