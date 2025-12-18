const menuData = [
    {
      category: "☕ Topli napici",
      items: [
        { name: "Espresso", price: "1.50" },
        { name: "Espresso s mlijekom", price: "1.50" },
        { name: "Nescafé", price: "2.00" },
        { name: "Čaj", price: "1.00" },
      ]
    },
    {
      category: "🥤 Bezalkoholna pića",
      items: [
        { name: "Coca-Cola", price: "2.50" },
        { name: "Fanta", price: "2.50" },
        { name: "Sprite", price: "2.50" },
        { name: "Ice Tea", price: "2.00" },
        { name: "Cedevita", price: "2.00" },
        { name: "Green kola", price: "2.50" }
      ]
    },
    {
      category: "💧 Voda",
      items: [
        { name: "Prirodna voda", price: "1.00" },
        { name: "Mineralna voda", price: "1.50" }
      ]
    },
    {
      category: "🥤 Protein & Fitness",
      items: [
        { name: "Whey protein shake", price: "3.00" },
        { name: "Protein bar", price: "3.00" },
        { name: "BCA", price: "3.50" },
        { name: "L-carnitine", price: "3.50" }
      ]
    },
    {
      category: "🍿 Grickalice",
      items: [
        { name: "Smoki mali", price: "1.00" },
        { name: "Smoki veliki", price: "1.50" },
        { name: "Kikiriki mali", price: "1.00" },
        { name: "Kikiriki veliki", price: "1.50" }
      ]
    }
  ];
  
  const menuDiv = document.getElementById("menu");
  
  function renderMenu() {
    menuDiv.innerHTML = "";
  
    menuData.forEach(section => {
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `<h2>${section.category}</h2>`;
  
      section.items.forEach(item => {
        const row = document.createElement("div");
        row.className = "item";
        row.innerHTML = `
          <div>${item.name}</div>
          <span>${item.price} KM</span>
        `;
        card.appendChild(row);
      });
  
      menuDiv.appendChild(card);
    });
  }
  
  renderMenu();