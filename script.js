// Create section, nested in main (index.html )
const main = document.getElementById('main');
const featuredDancers = document.createElement('section');
featuredDancers.className = 'main-section-dancers';
featuredDancers.id = 'featureDancer';
main.appendChild(featuredDancers);

const featuredDancersDIV = document.createElement('div');
featuredDancersDIV.className = 'main-section-dancers-content';
featuredDancers.appendChild(featuredDancersDIV);

const featuredDancersTitle = document.createElement('h3');
featuredDancersTitle.className = 'main-section-dancers-title';
featuredDancersTitle.textContent = 'Featured Dancers';
featuredDancersDIV.appendChild(featuredDancersTitle);

const featuredDancersTitleUnderline = document.createElement('p');
featuredDancersTitleUnderline.className = 'footer-top-underline display-flex-center';
featuredDancersDIV.appendChild(featuredDancersTitleUnderline);

const featuredDancersTitleUnderlineSp = document.createElement('span');
featuredDancersTitleUnderlineSp.className = 'footer-top-underline-span';
featuredDancersTitleUnderlineSp.className = 'footer-top-underline-span';
featuredDancersTitleUnderline.appendChild(featuredDancersTitleUnderlineSp);

const cardUL = document.createElement('ul');
cardUL.className = 'main-section-dancers-cards';
cardUL.id = 'cards-show';
featuredDancersDIV.appendChild(cardUL);

// Generate cards in the created section, nested in main (index.html )
function ProjectCard(imageLink, imageAltText, title, descriprion, textContent) {
  this.image = {
    link: imageLink,
    altText: imageAltText,
  };
  this.title = title;
  this.descriprion = descriprion;
  this.textContent = textContent;
}

const dancers = [];

dancers.push(
  new ProjectCard(
    'images/dancer-Clara.jpg',
    'Picture of Dancer',
    'Clara Rossa',
    "Salsa teacher and owner of 'Dance Studio - Havana Barcelona'",
    'In 2001 won a first place in World Latin Compettitioon for young dancers and have got the chance to travel around the world.',
  ),
);

dancers.push(
  new ProjectCard(
    'images/dancer-Clara.jpg',
    'Picture of Dancer',
    'Clara Rossa',
    "Salsa teacher and owner of 'Dance Studio - Havana Barcelona'",
    'In 2001 won a first place in World Latin Compettitioon for young dancers and have got the chance to travel around the world.',
  ),
);

dancers.push(
  new ProjectCard(
    'images/dancer-Clara.jpg',
    'Picture of Dancer',
    'Clara Rossa',
    "Salsa teacher and owner of 'Dance Studio - Havana Barcelona'",
    'In 2001 won a first place in World Latin Compettitioon for young dancers and have got the chance to travel around the world.',
  ),
);

dancers.push(
  new ProjectCard(
    'images/dancer-Clara.jpg',
    'Picture of Dancer',
    'Clara Rossa',
    "Salsa teacher and owner of 'Dance Studio - Havana Barcelona'",
    'In 2001 won a first place in World Latin Compettitioon for young dancers and have got the chance to travel around the world.',
  ),
);

dancers.push(
  new ProjectCard(
    'images/dancer-Clara.jpg',
    'Picture of Dancer',
    'Clara Rossa',
    "Salsa teacher and owner of 'Dance Studio - Havana Barcelona'",
    'In 2001 won a first place in World Latin Compettitioon for young dancers and have got the chance to travel around the world.',
  ),
);

dancers.push(
  new ProjectCard(
    'images/dancer-Clara.jpg',
    'Picture of Dancer',
    'Clara Rossa',
    "Salsa teacher and owner of 'Dance Studio - Havana Barcelona'",
    'In 2001 won a first place in World Latin Compettitioon for young dancers and have got the chance to travel around the world.',
  ),
);

for (let i = 0; i < dancers.length; i += 1) {
  const cardItem = document.createElement('li');
  cardItem.className = 'main-section-dancers-card';
  cardUL.appendChild(cardItem);

  const blackAndWhite = document.createElement('img');
  blackAndWhite.className = 'black-and-white';
  blackAndWhite.src = 'images/black-white-squares.jpg';
  blackAndWhite.altText = 'Background image - black-white-squares';
  cardItem.appendChild(blackAndWhite);

  const cardImg = document.createElement('img');
  cardImg.className = 'main-section-dancers-card-image';
  cardImg.src = dancers[i].image.link;
  cardImg.altText = dancers[i].image.altText;
  cardItem.appendChild(cardImg);

  const cardContent = document.createElement('div');
  cardContent.className = 'main-section-dancers-card-content';
  cardItem.appendChild(cardContent);

  const cardTitle = document.createElement('h3');
  cardTitle.className = 'main-section-dancers-card-title';
  cardTitle.textContent = dancers[i].title;
  cardContent.appendChild(cardTitle);

  const cardDecription = document.createElement('p');
  cardDecription.className = 'main-section-dancers-card-description';
  cardDecription.textContent = dancers[i].descriprion;
  cardContent.appendChild(cardDecription);

  const cardText = document.createElement('p');
  cardText.className = 'main-section-dancers-card-text';
  cardText.textContent = dancers[i].textContent;
  cardContent.appendChild(cardText);
}

// Function for displaying cards in section,
// nested in main (index.html ) dippends on the screen width

function checkWindowWidth() {
  for (let j = 0; j < 6; j += 1) {
    if (window.screen.width < 768 && j > 1) {
      document.getElementsByClassName('main-section-dancers-card')[
        j
      ].style.display = 'none';
    } else {
      document.getElementsByClassName('main-section-dancers-card')[
        j
      ].style.display = 'flex';
    }
  }
}

window.addEventListener('load', checkWindowWidth);
window.addEventListener('resize', checkWindowWidth);

// Add event on click to the button the section, nested in main (index.html ) - MORE btn
const buttonMore = document.createElement('button');
buttonMore.className = 'main-button-more';
buttonMore.textContent = 'MORE';
featuredDancersDIV.appendChild(buttonMore);

const buttonIcon = document.createElement('i');
buttonIcon.className = 'fas fa-chevron-down';
buttonMore.appendChild(buttonIcon);

let buttonStatus = false;

buttonMore.addEventListener('click', () => {
  if (buttonStatus === false) {
    for (let j = 0; j < 6; j += 1) {
      document.getElementsByClassName('main-section-dancers-card')[
        j
      ].style.display = 'flex';
    }

    buttonStatus = true;
    buttonMore.textContent = 'LESS';
    const buttonIcon = document.createElement('i');
    buttonIcon.className = 'fas fa-chevron-up';
    buttonMore.appendChild(buttonIcon);
  } else {
    for (let j = 2; j < 6; j += 1) {
      document.getElementsByClassName('main-section-dancers-card')[
        j
      ].style.display = 'none';
    }
    buttonStatus = false;
    buttonMore.textContent = 'MORE';
    const buttonIcon = document.createElement('i');
    buttonIcon.className = 'fas fa-chevron-down';
    buttonMore.appendChild(buttonIcon);
  }
});
