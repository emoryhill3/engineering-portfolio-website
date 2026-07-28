console.log("Engineering portfolio website loaded.");

const tabs = document.querySelectorAll(".tab-button");
const cards = document.querySelectorAll(".project-card-link");

tabs.forEach(tab => {
  tab.addEventListener("click", () => {

    tabs.forEach(t => t.classList.remove("active"));
    tab.classList.add("active");

    const selectedTab = tab.dataset.tab;

    cards.forEach(cardLink => {
      const card = cardLink.querySelector(".project-card");
      const category = card.dataset.category;

      if (selectedTab === "all" || category === selectedTab) {
        cardLink.style.display = "block";
      } else {
        cardLink.style.display = "none";
      }
    });

  });
});
