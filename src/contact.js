import styles from "./styles/contact.module.css";

export default function loadContact() {
  const content = document.getElementById("content");

  const container = document.createElement("div");
  container.className = styles.container;

  const headline = document.createElement("h1");
  headline.textContent = "Contact Us";
  headline.className = styles.headline;

  const contactList = document.createElement("ul");
  contactList.className = styles.contactList;

  [
    { type: "Phone", value: "+254 700 123 456" },
    { type: "Email", value: "info@goldenplate.co.ke" },
    { type: "Address", value: "1235 Avenue Street, off Koinange-Karume Road, Nairobi, Kenya" }
  ].forEach(item => {
    const li = document.createElement("li");
    li.innerHTML = `<strong>${item.type}:</strong> ${item.value}`;
    contactList.appendChild(li);
  });

  container.append(headline, contactList);
  content.appendChild(container);
}
