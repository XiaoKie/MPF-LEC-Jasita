const filter = document.getElementById("filter");
const items = document.querySelectorAll(".itemJasa");

filter.addEventListener("input", () => {
  const searchTerm = filter.value.trim().toLowerCase();

  items.forEach((item) => {
    const text = item.textContent.toLowerCase();

    if (text.includes(searchTerm)) {
      item.classList.remove("d-none");
    } else {
      item.classList.add("d-none");
    }
  });
});