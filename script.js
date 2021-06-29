// ===== Create section, nested in main (index.html ) =====

const main = document.getElementById("main");
const featuredSpeakers = document.createElement("section");
featuredSpeakers.className = "main-section-speakers";
main.appendChild(featuredSpeakers);

let featuredSpeakersDIV = document.createElement("div");
featuredSpeakersDIV.className = "main-section-speakers-content";
featuredSpeakers.appendChild(featuredSpeakersDIV);

let featuredSpeakersTitle = document.createElement("h3");
featuredSpeakersTitle.className = "main-section-speakers-title";
featuredSpeakersTitle.textContent = "Featured Speakers";
featuredSpeakersDIV.appendChild(featuredSpeakersTitle);

let featuredSpeakersTitleUnderline = document.createElement("p");
featuredSpeakersTitleUnderline.className = "footer-top-underline";
featuredSpeakersDIV.appendChild(featuredSpeakersTitleUnderline);

let featuredSpeakersTitleUnderlineSp = document.createElement("span");
featuredSpeakersTitleUnderlineSp.className = "footer-top-underline-span";
featuredSpeakersTitleUnderlineSp.className = "footer-top-underline-span";
featuredSpeakersTitleUnderline.appendChild(featuredSpeakersTitleUnderlineSp);

// ===== Generate cards in the created section, nested in main (index.html ) =====
