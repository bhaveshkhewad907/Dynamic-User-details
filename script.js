const form = document.querySelector("form");
const cardsContainer = document.querySelector("#cardsContainer");

const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const phoneInput = document.querySelector("#phone");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  cardMaker(nameInput.value, emailInput.value, phoneInput.value);

  form.reset();
});

function cardMaker(name, email, phone) {
  const card = document.createElement("div");
  card.classList.add("card");

  const h3 = document.createElement("h3");
  h3.innerText = "User Details";

  const p = document.createElement("p");
  p.innerHTML = `<strong>Name -</strong>${name}<br>
  <strong>Email -</strong>${email}<br>
  <strong>Phone -</strong>${phone}`;

  card.append(h3, p);
  cardsContainer.appendChild(card);
}
