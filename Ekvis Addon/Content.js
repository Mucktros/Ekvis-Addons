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
        '[id=".land"], [inkscape\\:label=".land"], [class="noarea group clicktarget"], .land'
    );
    elements.forEach(el => {
        el.style.opacity = el.style.opacity === "0" ? "1" : "0";
    });
    RemoveLandButton.classList.toggle("active");
});

floatingPanel.appendChild(RemoveLandButton);

const RemoveFlagsButton = document.createElement("button");
RemoveFlagsButton.classList.add("toggleButton");
RemoveFlagsButton.innerHTML = "Remove Flags";

let observer;

RemoveFlagsButton.addEventListener("click", () => {
    const cursorText = document.querySelector("#cursorText");
    const elements = document.querySelectorAll('[id="flagIcon"], [id="flagHeader"]');

    if (!cursorText) return;

    if (RemoveFlagsButton.classList.contains("active")) {
        if (observer) observer.disconnect();

        elements.forEach(el => {
            el.style.visibility = "visible";
            el.style.opacity = "1";
            el.style.pointerEvents = "auto";
        });

        const img = cursorText.querySelector("img");
        if (img) {
            img.style.visibility = "visible";
            img.style.opacity = "1";
            img.style.pointerEvents = "auto";
        }
    } else {
        elements.forEach(el => {
            el.style.visibility = "hidden";
            el.style.opacity = "0";
            el.style.pointerEvents = "none";
        });

        const img = cursorText.querySelector("img");
        if (img) {
            img.style.visibility = "hidden";
            img.style.opacity = "0";
            img.style.pointerEvents = "none";
        }

        observer = new MutationObserver(() => {
            const updatedImg = cursorText.querySelector("img");
            if (updatedImg) {
                updatedImg.style.visibility = "hidden";
                updatedImg.style.opacity = "0";
                updatedImg.style.pointerEvents = "none";
            }
        });

        observer.observe(cursorText, { childList: true, subtree: true });
    }

    RemoveFlagsButton.classList.toggle("active");
});

floatingPanel.appendChild(RemoveFlagsButton);

const ResetKeyButton = document.createElement("button");
ResetKeyButton.classList.add("toggleButton");
ResetKeyButton.innerHTML = "Reset Hotkey [NONE]";

let selectedKey = null;

ResetKeyButton.addEventListener("click", () => {
    if (selectedKey) {
        selectedKey = null;
        ResetKeyButton.innerHTML = "Reset Hotkey [NONE]";
    } else {
        ResetKeyButton.innerHTML = "Press Any Key...";
        const keyPressHandler = (event) => {
            event.preventDefault();
            selectedKey = event.key.toUpperCase();
            ResetKeyButton.innerHTML = `Reset Hotkey [${selectedKey}]`;
            document.removeEventListener("keydown", keyPressHandler);
        };
        document.addEventListener("keydown", keyPressHandler);
    }
});

ResetKeyButton.addEventListener("keydown", (event) => {
    if (event.code === "Space") {
        event.preventDefault();
    }
});

document.addEventListener("keydown", (event) => {
    if (event.isTrusted && event.key.toUpperCase() === selectedKey) {
        const altRDownEvent = new KeyboardEvent("keydown", {
            key: "r",
            code: "KeyR",
            altKey: true,
            bubbles: true,
            cancelable: true,
        });
        const altRUpEvent = new KeyboardEvent("keyup", {
            key: "r",
            code: "KeyR",
            altKey: true,
            bubbles: true,
            cancelable: true,
        });

        document.dispatchEvent(altRDownEvent);
        document.dispatchEvent(altRUpEvent);
    }
});

floatingPanel.appendChild(ResetKeyButton);

const closeButton = document.createElement("button");
closeButton.classList.add("closeButton");
closeButton.innerHTML = "Close Menu";

closeButton.addEventListener("click", () => {
    floatingPanel.classList.add("closing");
    setTimeout(() => {
        floatingPanel.classList.add("hidden");
        floatingPanel.classList.remove("closing");
    }, 300);
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

closeButton.addEventListener("click", () => {
    floatingPanel.classList.add("closing");
    setTimeout(() => {
        floatingPanel.classList.add("hidden");
        floatingPanel.classList.remove("closing");
        reopenButton.classList.remove("hidden");
    }, 300);
});
