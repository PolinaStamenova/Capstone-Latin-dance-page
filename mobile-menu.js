// ======== Mobile menu =========

// ===== Create dinamicly popup mobile-menu elements =====

const body = document.getElementById("html");
const menu = document.createElement("div");
menu.className = "mobile-menu-style";
body.appendChild(menu);

const icon = document.createElement("i");
icon.className = "fas fa-times fa-2x";
menu.appendChild(icon);

const menuList = document.createElement("ul");
menuList.className = "menu-list";
menu.appendChild(menuList);

const home = document.createElement("li");
home.className = "home";
const homeLink = document.createElement("a");
homeLink.className = "mobile-link";
homeLink.textContent = "Home";
homeLink.href = "index.html";
home.appendChild(homeLink);
menuList.appendChild(home);

const about = document.createElement("li");
about.className = "about";
const aboutLink = document.createElement("a");
aboutLink.className = "mobile-link";
aboutLink.textContent = "About";
aboutLink.href = "about.html";
about.appendChild(aboutLink);
menuList.appendChild(about);

const join = document.createElement("li");
join.className = "join";
const joinLink = document.createElement("a");
joinLink.className = "mobile-link";
joinLink.textContent = "Join";
joinLink.href = "#";
join.appendChild(joinLink);
menuList.appendChild(join);

document.getElementById("hamburger").addEventListener("click", () => {
  menu.style.display = "block";
  document.getElementById("body").style.filter = "blur(5px)";
});

icon.addEventListener("click", () => {
  menu.style.display = "none";
  document.getElementById("body").style.filter = "none";
});
