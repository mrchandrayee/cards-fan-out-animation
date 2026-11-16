const deck = document.getElementById("deck");
const cards = [...deck.querySelectorAll(".card")];

function selectCard(selected) {
  cards.forEach((card) => {
    const active = card === selected;
    card.classList.toggle("is-active", active);
    card.setAttribute("aria-pressed", String(active));
  });
  deck.classList.add("has-selection");
}

function clearSelection() {
  deck.classList.remove("has-selection");
  cards.forEach((card) => {
    card.classList.remove("is-active");
    card.setAttribute("aria-pressed", "false");
  });
  // Restore the central Explore card as the resting focus.
  const explore = cards.find((card) => card.dataset.card === "2");
  explore.classList.add("is-active");
  explore.setAttribute("aria-pressed", "true");
}

cards.forEach((card) => {
  card.addEventListener("mouseenter", () => selectCard(card));
  card.addEventListener("focus", () => selectCard(card));
  card.addEventListener("click", () => selectCard(card));
});

deck.addEventListener("mouseleave", clearSelection);
deck.addEventListener("focusout", (event) => {
  if (!deck.contains(event.relatedTarget)) clearSelection();
});
