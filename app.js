const container = document.querySelector(".container");
const coffees = [
  { name: "Perspiciatis", image: "images/coffee1.jpg" },
  { name: "Voluptatem", image: "images/coffee2.jpg" },
  { name: "Explicabo", image: "images/coffee3.jpg" },
  { name: "Rchitecto", image: "images/coffee4.jpg" },
  { name: " Beatae", image: "images/coffee5.jpg" },
  { name: " Vitae", image: "images/coffee6.jpg" },
  { name: "Inventore", image: "images/coffee7.jpg" },
  { name: "Veritatis", image: "images/coffee8.jpg" },
  { name: "Accusantium", image: "images/coffee9.jpg" },
];

const pages = {
  home: `
    <div class="container">
      ${coffees
        .map(
          ({ name, image }) => `
        <div class="card">
          <img class="card--avatar" src=${image} />
          <h1 class="card--title">${name}</h1>
          <a class="card--link" href="#">Taste</a>
        </div>`
        )
        .join("")}
    </div>
  `,
  about: `<section><h2>About Us</h2><p>Welcome to Dev'Coffee, the best coffee in town!</p></section>`,
  contact: `<section><h2>Contact Us</h2><p>Email: info@devcoffee.com</p></section>`,
};

document.querySelectorAll("nav ul li a").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const page = e.target.getAttribute("data-page");
    document.getElementById("content").innerHTML = pages[page];
    if (page === "home") attachClickEvents();
  });
});

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("content").innerHTML = pages.home;
  attachClickEvents();
});

const showCoffeeDetails = (name) => {
  const coffee = coffees.find((coffee) => coffee.name === name);
  document.getElementById("content").innerHTML = `
    <div class="card">
      <img class="card--avatar" src=${coffee.image} />
      <h1 class="card--title">${coffee.name}</h1>
      <p>Delicious coffee details here!</p>
      <a href="#" onclick="goHome()">Back</a>
    </div>`;
};

const goHome = () => {
  document.getElementById("content").innerHTML = pages.home;
  attachClickEvents();
};

const attachClickEvents = () => {
  document.querySelectorAll(".card--link").forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const name = e.target.closest(".card").querySelector(".card--title").textContent;
      showCoffeeDetails(name);
    });
  });
};

// Search Functionality
document.getElementById("search")?.addEventListener("input", (e) => {
  const query = e.target.value.toLowerCase();
  const filteredCoffees = coffees.filter((coffee) => coffee.name.toLowerCase().includes(query));
  const output = filteredCoffees
    .map(
      ({ name, image }) => `
    <div class="card">
      <img class="card--avatar" src=${image} />
      <h1 class="card--title">${name}</h1>
      <a class="card--link" href="#">Taste</a>
    </div>`
    )
    .join("");
  document.querySelector(".container").innerHTML = output;
  attachClickEvents();
});