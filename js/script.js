const startInput = document.getElementById("startDate");
const endInput = document.getElementById("endDate");
const gallery = document.getElementById("gallery");
const button = document.querySelector("button");

// Setup NASA range logic
setupDateInputs(startInput, endInput);

button.addEventListener("click", async () => {
  const start = startInput.value;
  const end = endInput.value;

  if (!start || !end) return;

  gallery.innerHTML = "<p>🔄 Loading space photos…</p>";

  const url = `https://api.nasa.gov/planetary/apod?api_key=AoGhDg6AgRiBWQd7VfUateUX29avC6VW1Zxd4DO1&start_date=${start}&end_date=${end}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    renderGallery(data);
  } catch (error) {
    gallery.innerHTML = `<p>🚨 Error fetching data: ${error.message}</p>`;
  }
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    document.getElementById("modal").classList.add("hidden");
  }
});

function renderGallery(items) {
  gallery.innerHTML = ""; // Clear existing content
  document.querySelector(".placeholder")?.remove(); // hide if exists

  items.forEach((item) => {
    const card = document.createElement("div");
    card.classList.add("gallery-item");

    if (item.media_type === "image") {
      card.innerHTML = `
      <img src="${item.url}" alt="${item.title}" />
      <p><strong>${item.title}</strong> – ${item.date}</p>
    `;
      card.addEventListener("click", () => openModal(item));
    } else if (item.media_type === "video") {
      card.innerHTML = `
      <div class="video-wrapper">
        <iframe src="${item.url}" frameborder="0" allowfullscreen></iframe>
      </div>
      <p><strong>${item.title}</strong> – ${item.date}</p>
    `;
      card.addEventListener("click", () => openModal(item));
    }

    gallery.appendChild(card);
  });
}

function openModal(item) {
  const modal = document.getElementById("modal");
  document.getElementById("modal-img").src = item.url;
  document.getElementById("modal-title").textContent = item.title;
  document.getElementById("modal-date").textContent = item.date;
  document.getElementById("modal-explanation").textContent = item.explanation;
  modal.classList.remove("hidden");
}

document.querySelector(".close-btn").addEventListener("click", () => {
  document.getElementById("modal").classList.add("hidden");
});

const spaceFacts = [
  "The Sun accounts for 99.86% of the mass in our solar system.",
  "A spoonful of neutron star would weigh about a billion tons.",
  "There may be more trees on Earth than stars in the Milky Way.",
  "Saturn's rings are less than 1 kilometer thick.",
  "Mars has the tallest mountain in the solar system—Olympus Mons.",
];

const fact = spaceFacts[Math.floor(Math.random() * spaceFacts.length)];
const factDiv = document.createElement("div");
factDiv.textContent = `🛰️ Did you know? ${fact}`;
factDiv.style.textAlign = "center";
factDiv.style.marginTop = "10px";
document.querySelector(".filters").insertAdjacentElement("afterend", factDiv);
