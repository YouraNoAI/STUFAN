document.addEventListener("DOMContentLoaded", function () {
  const checklists = document.querySelectorAll(".checklist ul");

  checklists.forEach((checklist, checklistIndex) => {
    const items = checklist.querySelectorAll("li");

    items.forEach((item, itemIndex) => {
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.className = "checklist-checkbox";

      const itemId = `checklist-${checklistIndex}-${itemIndex}`;
      checkbox.id = itemId;

      if (localStorage.getItem(itemId)) {
        checkbox.checked = true;
        item.classList.add("completed");
      }

      checkbox.addEventListener("change", function () {
        if (this.checked) {
          item.classList.add("completed");
          localStorage.setItem(itemId, "true");
        } else {
          item.classList.remove("completed");
          localStorage.removeItem(itemId);
        }
        updateProgress();
      });

      item.insertBefore(checkbox, item.firstChild);
    });
  });

  updateProgress();
});

function updateProgress() {
  const allCheckboxes = document.querySelectorAll(".checklist-checkbox");
  const checkedCheckboxes = document.querySelectorAll(
    ".checklist-checkbox:checked",
  );
  const progress = (checkedCheckboxes.length / allCheckboxes.length) * 100;

  let progressBar = document.querySelector(".progress-bar");
  if (!progressBar) {
    progressBar = document.createElement("div");
    progressBar.className = "progress-bar";
    document
      .querySelector(".content")
      .insertBefore(progressBar, document.querySelector(".checklist"));
  }

  progressBar.style.width = progress + "%";
}

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});
