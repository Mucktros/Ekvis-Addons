const floatingPanel = document.createElement("div");
floatingPanel.id = "floatingPanel";

const RemoveLabelButton = document.createElement("button");
RemoveLabelButton.classList.add("toggleButton");
RemoveLabelButton.innerHTML = "Remove Label";

RemoveLabelButton.addEventListener("click", () => {
  const element = document.getElementById("cursorText");
  if (element) {
    element.classList.toggle("hidden");
  }
  RemoveLabelButton.classList.toggle("active");
});

floatingPanel.appendChild(RemoveLabelButton);

const RemoveBackgroundButton = document.createElement("button");
RemoveBackgroundButton.classList.add("toggleButton");
RemoveBackgroundButton.innerHTML = "Remove Background";

RemoveBackgroundButton.addEventListener("click", () => {
  const elements = document.querySelectorAll(
    '[id=".water"], [inkscape\\:label=".water"], .water, .background'
  );
  elements.forEach(el => {
    el.style.opacity = el.style.opacity === "0" ? "1" : "0";
  });
  RemoveBackgroundButton.classList.toggle("active");
});

floatingPanel.appendChild(RemoveBackgroundButton);

const RemoveLandButton = document.createElement("button");
RemoveLandButton.classList.add("toggleButton");
RemoveLandButton.innerHTML = "Remove Extra Land";

RemoveLandButton.addEventListener("click", () => {
  const elements = document.querySelectorAll(
    '[id=".land"], [inkscape\\:label=".land"], .land'
  );
  elements.forEach(el => {
    el.style.opacity = el.style.opacity === "0" ? "1" : "0";
  });
  RemoveLandButton.classList.toggle("active");
});

floatingPanel.appendChild(RemoveLandButton);

const closeButton = document.createElement("button");
closeButton.classList.add("closeButton");
closeButton.innerHTML = "Close Menu";

closeButton.addEventListener("click", () => {
  floatingPanel.classList.add("hidden");
  reopenButton.classList.remove("hidden");
});

floatingPanel.appendChild(closeButton);
document.body.appendChild(floatingPanel);

const reopenButton = document.createElement("button");
reopenButton.id = "reopenButton";
reopenButton.innerHTML = "Open Menu";

reopenButton.classList.add("hidden");

reopenButton.addEventListener("click", () => {
  floatingPanel.classList.remove("hidden");
  reopenButton.classList.add("hidden");
});

document.body.appendChild(reopenButton);
