import "./styles/global.css";

function clearContent() {
  const content = document.getElementById("content");
  content.innerHTML = "";
}

function setActive(button) {
  document.querySelectorAll("nav button").forEach(btn =>
    btn.classList.remove("active")
  );
  button.classList.add("active");
}

const routes = {
  home: () => import("./home.js"),
  menu: () => import("./menu.js"),
  contact: () => import("./contact.js"),
};

async function navigate(route) {
  const content = document.getElementById("content");
  content.style.opacity = "0";

  const module = await routes[route]();
  const loadPage = module.default;

  clearContent();
  loadPage();

  content.style.opacity = "1";

  history.pushState({ route }, "", `#${route}`);

  const activeBtn = document.getElementById(route + "Btn");
  setActive(activeBtn);
}

// Create global footer
function createFooter() {
  const footer = document.createElement("footer");
  footer.className = "footer";
  footer.innerHTML = `
    &copy; 2026 The Golden Plate. All rights reserved.
    <br>
    Follow us on 
    <a href="#">Instagram</a>, 
    <a href="#">Facebook</a>, 
    <a href="#">X (Twitter)</a>
  `;
  document.body.appendChild(footer);
}

document.addEventListener("DOMContentLoaded", () => {
  // Navigation buttons
  const homeBtn = document.getElementById("homeBtn");
  const menuBtn = document.getElementById("menuBtn");
  const contactBtn = document.getElementById("contactBtn");

  homeBtn.addEventListener("click", () => navigate("home"));
  menuBtn.addEventListener("click", () => navigate("menu"));
  contactBtn.addEventListener("click", () => navigate("contact"));

  // Load default page
  const initialRoute = location.hash.replace("#", "") || "home";
  navigate(initialRoute);

  // Add footer once globally
  createFooter();
});
