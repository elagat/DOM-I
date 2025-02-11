const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

// Update the img src for the code snippets

let ctaImage = document.getElementById("cta-img");
ctaImage.setAttribute('src', siteContent["cta"]["img-src"]);

let middleImage = document.getElementById("middle-img");
middleImage.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

// Update the nav

let navBar = document.querySelector('nav').children;
navBar[0].textContent = siteContent['nav']['nav-item-1'];
navBar[1].textContent = siteContent['nav']['nav-item-2'];
navBar[2].textContent = siteContent['nav']['nav-item-3'];
navBar[3].textContent = siteContent['nav']['nav-item-4'];
navBar[4].textContent = siteContent['nav']['nav-item-5'];
navBar[5].textContent = siteContent['nav']['nav-item-6'];

for (let i = 0; i < 6; i++) {
  navBar[i].style.color = 'green';
}

let nav = document.querySelector('nav');
let newAnchor1 = document.createElement('a');
let newAnchor2 = document.createElement('a');
newAnchor1.textContent = 'Blog'
newAnchor2.textContent = 'Story'
nav.appendChild(newAnchor1);
nav.prepend(newAnchor2);

newAnchor1.style.color = 'green';
newAnchor2.style.color = 'green';

// Update the h1

let title = document.querySelector('h1');
title.textContent = siteContent['cta']['h1'];
title.style.width = '230px';
title.style.textAlign = 'center';
title.innerHTML = siteContent['cta']['h1'].split('DOM').join('DOM<br>');

// Update the button

let button = document.querySelector('button');
button.textContent = siteContent['cta']['button'];


// Update the middle content paragraphs

let paragraph = document.querySelectorAll('p');
paragraph[0].textContent = siteContent['main-content']['features-content'];
paragraph[1].textContent = siteContent['main-content']['about-content'];
paragraph[2].textContent = siteContent['main-content']['services-content'];
paragraph[3].textContent = siteContent['main-content']['product-content'];
paragraph[4].textContent = siteContent['main-content']['vision-content'];
paragraph[5].textContent = siteContent['contact']['address'];
paragraph[6].textContent = siteContent['contact']['phone'];
paragraph[7].textContent = siteContent['contact']['email'];
paragraph[8].textContent = siteContent['footer']['copyright']

// Address line break

paragraph[5].innerHTML = siteContent['contact']['address'].split('Street').join('Street<br>');

// Update the h4

let h4Title = document.querySelectorAll('h4');
h4Title[0].textContent = siteContent['main-content']['features-h4'];
h4Title[1].textContent = siteContent['main-content']['about-h4'];
h4Title[2].textContent = siteContent['main-content']['services-h4'];
h4Title[3].textContent = siteContent['main-content']['product-h4'];
h4Title[4].textContent = siteContent['main-content']['vision-h4'];
h4Title[5].textContent = siteContent['contact']['contact-h4'];
