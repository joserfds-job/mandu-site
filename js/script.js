// MENU MOBILE
const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav-links");

toggle.addEventListener("click", () => {
  nav.classList.toggle("active");
});

// SCROLL ANIMATION
function revealOnScroll() {
  const reveals = document.querySelectorAll(".reveal");

  reveals.forEach(el => {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;

    if (elementTop < windowHeight - 100) {
      el.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);

// CARDÁPIO
const div = document.getElementById("conteudo-cardapio");

div.innerHTML = `
  <div class="cardapio-box">
    <h3>Base</h3>
    ${cardapio.base.map(i => `<p>${i}</p>`).join("")}
  </div>

  <div class="cardapio-box">
    <h3>Proteínas</h3>
    ${cardapio.proteina.map(i => `<p>${i}</p>`).join("")}
  </div>

  <div class="cardapio-box">
    <h3>Acompanhamentos</h3>
    ${cardapio.acompanhamento.map(i => `<p>${i}</p>`).join("")}
  </div>

  <div class="cardapio-box">
    <h3>Sobremesa</h3>
    ${cardapio.sobremesa.map(i => `<p>${i}</p>`).join("")}
  </div>
`;