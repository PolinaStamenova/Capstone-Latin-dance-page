// ===== Create section, nested in main (index.html ) =====

const main = document.getElementById("main");
const featuredDancers = document.createElement("section");
featuredDancers.className = "main-section-dancers";
main.appendChild(featuredDancers);

let featuredDancersDIV = document.createElement("div");
featuredDancersDIV.className = "main-section-dancers-content";
featuredDancers.appendChild(featuredDancersDIV);

let featuredDancersTitle = document.createElement("h3");
featuredDancersTitle.className = "main-section-dancers-title";
featuredDancersTitle.textContent = "Featured Dancers";
featuredDancersDIV.appendChild(featuredDancersTitle);

let featuredDancersTitleUnderline = document.createElement("p");
featuredDancersTitleUnderline.className = "footer-top-underline";
featuredDancersDIV.appendChild(featuredDancersTitleUnderline);

let featuredDancersTitleUnderlineSp = document.createElement("span");
featuredDancersTitleUnderlineSp.className = "footer-top-underline-span";
featuredDancersTitleUnderlineSp.className = "footer-top-underline-span";
featuredDancersTitleUnderline.appendChild(featuredDancersTitleUnderlineSp);

const cardUL = document.createElement("ul");
cardUL.className = "main-section-dancers-cards";
featuredDancersDIV.appendChild(cardUL);

// ===== Generate cards in the created section, nested in main (index.html ) =====

function ProjectCard(imageLink, imageAltText, title, descriprion, textContent) {
  this.image = {
    link: imageLink,
    altText: imageAltText,
  };
  this.title = title;
  this.descriprion = descriprion;
  this.textContent = textContent;
}

let dancers = [];

dancers.push(
  new ProjectCard(
    "images/dancer-Clara.jpg",
    "Picture of Dancer",
    "Clara Rossa",
    "Salsa teacher and owner of 'Dance Studio - Havana Barcelona'",
    "In 2001 won a first place in World Latin Compettitioon for young dancers and have got the chance to travel around the world."
  )
);

dancers.push(
  new ProjectCard(
    "images/dancer-Clara.jpg",
    "Picture of Dancer",
    "Clara Rossa",
    "Salsa teacher and owner of 'Dance Studio - Havana Barcelona'",
    "In 2001 won a first place in World Latin Compettitioon for young dancers and have got the chance to travel around the world."
  )
);

dancers.push(
  new ProjectCard(
    "images/dancer-Clara.jpg",
    "Picture of Dancer",
    "Clara Rossa",
    "Salsa teacher and owner of 'Dance Studio - Havana Barcelona'",
    "In 2001 won a first place in World Latin Compettitioon for young dancers and have got the chance to travel around the world."
  )
);

dancers.push(
  new ProjectCard(
    "images/dancer-Clara.jpg",
    "Picture of Dancer",
    "Clara Rossa",
    "Salsa teacher and owner of 'Dance Studio - Havana Barcelona'",
    "In 2001 won a first place in World Latin Compettitioon for young dancers and have got the chance to travel around the world."
  )
);

dancers.push(
  new ProjectCard(
    "images/dancer-Clara.jpg",
    "Picture of Dancer",
    "Clara Rossa",
    "Salsa teacher and owner of 'Dance Studio - Havana Barcelona'",
    "In 2001 won a first place in World Latin Compettitioon for young dancers and have got the chance to travel around the world."
  )
);

dancers.push(
  new ProjectCard(
    "images/dancer-Clara.jpg",
    "Picture of Dancer",
    "Clara Rossa",
    "Salsa teacher and owner of 'Dance Studio - Havana Barcelona'",
    "In 2001 won a first place in World Latin Compettitioon for young dancers and have got the chance to travel around the world."
  )
);

for (let i = 0; i < dancers.length; i += 1) {
  const cardItem = document.createElement("li");
  cardItem.className = "main-section-dancers-card";
  cardUL.appendChild(cardItem);

  const cardDIV = document.createElement("div");
  cardDIV.className = "main-section-dancers-card-div";
  cardItem.appendChild(cardDIV);

  let cardImg = document.createElement("img");
  cardImg.className = "main-section-dancers-card-image";
  cardImg.src = dancers[i].image.link;
  cardImg.altText = dancers[i].image.altText;
  cardDIV.appendChild(cardImg);

  const cardContent = document.createElement("div");
  cardContent.className = "main-section-dancers-card-content";
  cardDIV.appendChild(cardContent);

  let cardTitle = document.createElement("h3");
  cardTitle.className = "main-section-dancers-card-title";
  cardTitle.textContent = dancers[i].title;
  cardContent.appendChild(cardTitle);

  let cardDecription = document.createElement("p");
  cardDecription.className = "main-section-dancers-card-description";
  cardDecription.textContent = dancers[i].descriprion;
  cardContent.appendChild(cardDecription);

  let cardText = document.createElement("p");
  cardText.className = "main-section-dancers-card-text";
  cardText.textContent = dancers[i].textContent;
  cardContent.appendChild(cardText);
}
