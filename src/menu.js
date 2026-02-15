import styles from "./styles/menu.module.css";
import menuData from "./menuData.js";

export default function loadMenu() {
  const content = document.getElementById("content");
  content.innerHTML = ""; // clear previous content if any

  const container = document.createElement("div");
  container.className = styles.menuContainer;

  menuData.forEach(category => {
    // Category title
    const catTitle = document.createElement("h2");
    catTitle.textContent = category.category;
    catTitle.className = styles.categoryTitle;
    container.appendChild(catTitle);

    // Grid container
    const itemsGrid = document.createElement("div");
    itemsGrid.className = styles.itemsGrid;

    category.items.forEach(item => {
      // Individual card
      const card = document.createElement("div");
      card.className = styles.itemCard;

      // Image
      const img = document.createElement("img");
      img.src = item.image;
      img.alt = item.title;
      img.className = styles.itemImage;

      // Content wrapper
      const contentWrapper = document.createElement("div");
      contentWrapper.className = styles.itemContent;

      // Title
      const title = document.createElement("h3");
      title.textContent = item.title;
      title.className = styles.itemTitle;

      // Description
      const desc = document.createElement("p");
      desc.textContent = item.description;
      desc.className = styles.itemDescription;

      // Price
      const price = document.createElement("p");
      price.textContent = item.price;
      price.className = styles.itemPrice;

      contentWrapper.append(title, desc, price);
      card.append(img, contentWrapper);

      itemsGrid.appendChild(card);
    });

    container.appendChild(itemsGrid);
  });

  content.appendChild(container);
}
