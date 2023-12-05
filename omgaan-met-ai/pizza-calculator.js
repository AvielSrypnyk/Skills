function calculatePizzaPrice() {
    const smallCount = parseInt(document.getElementById('small').value) || 0;
    const mediumCount = parseInt(document.getElementById('medium').value) || 0;
    const largeCount = parseInt(document.getElementById('large').value) || 0;

    const smallPrice = 5.99;
    const mediumPrice = 7.99;
    const largePrice = 9.99;

    // Calculate total order price 
    const smallTotal = smallCount * smallPrice;
    const mediumTotal = mediumCount * mediumPrice;
    const largeTotal = largeCount * largePrice;
    const totalOrder = smallTotal + mediumTotal + largeTotal;

    // Display order summary
    document.getElementById('smallOrder').innerText = `Small Pizza (${smallCount}): $${smallTotal.toFixed(2)}`;
    document.getElementById('mediumOrder').innerText = `Medium Pizza (${mediumCount}): $${mediumTotal.toFixed(2)}`;
    document.getElementById('largeOrder').innerText = `Large Pizza (${largeCount}): $${largeTotal.toFixed(2)}`;
    document.getElementById('totalOrder').innerText = `Totaal: $${totalOrder.toFixed(2)}`;

    // Show order summary section
    document.getElementById('orderSummary').style.display = 'block';
}
