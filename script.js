document.addEventListener("DOMContentLoaded", function () {
  const maxLength = 300;

  document.querySelectorAll(".collapsible-article").forEach(article => {
    const p = article.querySelector("p");
    const fullText = p.innerHTML.trim();

    if (fullText.length <= maxLength) {
      article.querySelector("button").style.display = "none";
      return;
    }

    const shortText = fullText.slice(0, maxLength) + "...";
    p.innerHTML = shortText;

    const btn = article.querySelector(".toggle-btn");
    btn.textContent = "See More";

    btn.addEventListener("click", () => {
      const isExpanded = btn.textContent === "See Less";
      p.innerHTML = isExpanded ? shortText : fullText;
      btn.textContent = isExpanded ? "See More" : "See Less";
    });
  });
});
