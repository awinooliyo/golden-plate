import styles from "./styles/home.module.css";
import heroImg from "./assets/images/hero-banner.jpg";

export default function loadHome() {
  const content = document.getElementById("content");
  content.innerHTML = ""; // clear previous content

  // Hero Section
  const hero = document.createElement("div");
  hero.className = styles.hero;

  const img = document.createElement("img");
  img.src = heroImg;
  img.alt = "Warm Restaurant Interior";
  img.className = styles.heroImage;

  const overlay = document.createElement("div");
  overlay.className = styles.heroOverlay;
  overlay.innerHTML = `
    <h1 class="${styles.heroTitle}">The Golden Plate</h1>
    <p class="${styles.heroSubtitle}">Where tradition meets flavor</p>
  `;

  hero.append(img, overlay);
  content.appendChild(hero);

  // Main Container for text content
  const container = document.createElement("div");
  container.className = styles.container;

  // Welcome headline
  const headline = document.createElement("h2");
  headline.textContent = "Welcome to The Golden Plate";
  headline.className = styles.headline;

  const description = document.createElement("p");
  description.textContent = `Built with care. Served with pride.
The ambiance and customer service here will make you and your loved ones keep coming back for more.
We offer traditional African cuisine and a handful of global favorites.
Sit, order, relax, and enjoy a motherly, home-like meal.`;

  // Opening Hours
  const openingHoursTitle = document.createElement("h3");
  openingHoursTitle.textContent = "Opening Hours";

  const hoursList = document.createElement("ul");
  ["Monday - Friday: 8am - 9pm", "Saturday: 9am - 10pm", "Sunday: 10am - 8pm"].forEach(hour => {
    const li = document.createElement("li");
    li.textContent = hour;
    hoursList.appendChild(li);
  });

  // Location
  const locationTitle = document.createElement("h3");
  locationTitle.textContent = "Location";

  const locationDetails = document.createElement("p");
  locationDetails.textContent = "1235 Avenue Street, off Koinange-Karume Road";

  // Append all to container
  container.append(headline, description, openingHoursTitle, hoursList, locationTitle, locationDetails);
  content.appendChild(container);
}
