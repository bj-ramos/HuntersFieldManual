fetch("http://localhost:5000/api/monsters")
  .then(res => res.json())
  .then(monsters => {
    const container = document.getElementById("monster-list");

    monsters.forEach(m => {
      const div = document.createElement("div");
      div.classList.add("monster-card");

      div.innerHTML = `
        <h2>${m.name}</h2>
        <p><strong>Type:</strong> ${m.type}</p>
        <p>${m.description}</p>
        <p><strong>Weaknesses:</strong> ${m.weaknesses?.join(", ")}</p>
      `;

      container.appendChild(div);
    });
  })
  .catch(err => console.error("Error loading monsters:", err));
