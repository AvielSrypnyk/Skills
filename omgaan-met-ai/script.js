const drinks = {
    fris: 2.50,
    bier: 3.00,
    wijn: 4.00,
  };

  const snacks = {
    frikandel: 3.50,
    bitterballen8: 5.00,
    bitterballen16: 8.00,
    pizza: 10.00,
  };

  let orders = {
    drinks: {},
    snacks: {},
  };

  function toggleOrderForm() {
    const orderType = document.getElementById("order-type").value;
    const drinksForm = document.getElementById("drinks-form");
    const snacksForm = document.getElementById("snacks-form");

    if (orderType === "drank") {
      drinksForm.style.display = "block";
      snacksForm.style.display = "none";
    } else if (orderType === "snack") {
      drinksForm.style.display = "none";
      snacksForm.style.display = "block";
    }
  }

  document.getElementById("order-type").addEventListener("change", toggleOrderForm);

  document.getElementById("order-form").addEventListener("submit", function (event) {
    event.preventDefault();
    addOrder();
    this.reset();
    toggleOrderForm();
  });

  function addOrder() {
    const orderType = document.getElementById("order-type").value;

    if (orderType === "drank") {
      const drink = document.getElementById("drink-type").value;
      const quantity = parseInt(document.getElementById("drink-quantity").value);
      if (!drinks.hasOwnProperty(drink) || isNaN(quantity)) {
        alert("Ongeldige invoer. Uw bestelling kan niet worden toegevoegd.");
      } else {
        orders.drinks[drink] = (orders.drinks[drink] || 0) + quantity;
        alert(`U heeft ${quantity} ${drink} aan uw bestelling toegevoegd.`);
      }
    } else if (orderType === "snack") {
      const snack = document.getElementById("snack-type").value;
      const quantity = parseInt(document.getElementById("snack-quantity").value);

      if (snack === "pizza") {
        const slices = quantity;
        if (isNaN(slices) || slices < 1 || slices > 12) {
          alert("Ongeldige invoer. Uw bestelling kan niet worden toegevoegd.");
        } else {
          orders.snacks.pizza = (orders.snacks.pizza || 0) + slices;
          alert(`U heeft een pizza in ${slices} slices aan uw bestelling toegevoegd.`);
        }
      } else if (snack === "bitterballen") {
        if (quantity === 8 || quantity === 16) {
          const schalen = quantity;
          if (isNaN(schalen) || schalen < 1 || schalen > 12 ){
            alert("Ongeldige invoer. Uw bestelling kan niet worden toegevoegd.");
          } else {
            orders.snacks.bitterballen = (orders.snacks.bitterballen || 0) + schalen;
            alert(`U heeft ${schalen} schalen met ${quantity} bitterballen aan uw bestelling toegevoegd.`);
          }
        } else {
          alert("U kunt alleen een keuze maken tussen 8 en 16. De snacks zijn niet toegevoegd aan de bestelling.");
        }
      } else {
        alert("Sorry, dat hebben we niet.");
      }
    }
  }

  function showBill() {
    let bill = "Uw rekening:\n";
    let totalDrinksPrice = 0;

    for (const drink in orders.drinks) {
      const quantity = orders.drinks[drink];
      const price = drinks[drink];
      const total = quantity * price;
      totalDrinksPrice += total;
      bill += `${drink}: ${quantity} x €${price.toFixed(2)} = €${total.toFixed(2)}\n`;
    }

    let totalSnacksPrice = 0;

    for (const snack in orders.snacks) {
        const quantity = orders.snacks[snack];
        const price = snacks[snack];
        const total = quantity * price;
        totalSnacksPrice += total;
        bill += `${snack}: ${quantity} x €${price.toFixed(2)} = €${total.toFixed(2)}\n`;
      }

      const totalBill = totalDrinksPrice + totalSnacksPrice;
      bill += `Totaalprijs: €${totalBill.toFixed(2)}`;

      document.getElementById('output').innerText = bill;
    }
