async function loadPage(pageName, element) {
  document.querySelectorAll(".link i").forEach((icon) => {
    icon.classList.remove("active");
  });
   
  if (element) {
    element.classList.add("active");
  }
   
    const response = await fetch(`pages/${pageName}.html`);
    const html = await response.text();
    document.getElementById("Pages").innerHTML = html;

}

async function LearnPage(pageName) {
  window.location.href = `pages/${pageName}.html`;
}

window.addEventListener('DOMContentLoaded', () => {
  loadPage("Home", document.querySelector(".link i:first-child"));
});