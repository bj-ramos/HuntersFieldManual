fetch("http://localhost:5000/api/monsters")
  .then(res => res.json())
  .then(monsters => {
    const container = document.getElementById("monster-list");

    monsters.forEach(monster => {
      const div = document.createElement("div");
      div.classList.add("monster-card");

      div.innerHTML = `
        <img src="assets/images/${monster.image}" class="monster-img" alt="Rathalos">
        <h2>${monster.name}</h2>
        <p><strong>Type:</strong> ${monster.type}</p>
        <p>${monster.description}</p>
        <p><strong>Weaknesses:</strong> ${monster.weaknesses?.join(", ")}</p>
      `;

      container.appendChild(div);
    });
  })
  .catch(err => console.error("Error loading monsters:", err));
