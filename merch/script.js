/* Script pour la page merch */

document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.merch-item').forEach(item => {
        item.addEventListener('mouseover', () => {
            const button = item.querySelector('.buy-button');
            if (button) {
                button.style.display = 'block';
            }
        });
        item.addEventListener('mouseout', () => {
            const button = item.querySelector('.buy-button');
            if (button) {
                button.style.display = 'none';
            }
        });
    });
});



document.querySelectorAll('.buy-button').forEach(button => {
    button.addEventListener('click', () => {
        const count = document.querySelector('.panier-count');
        count.textContent = parseInt(count.textContent) + 1;

        const dropdown = document.querySelector('.panier-dropdown');
        const itemName = button.previousElementSibling.previousElementSibling.textContent;
        const itemPrice = parseFloat(button.getAttribute('data-price'));
        const existingItem = dropdown.querySelector(`[data-name="${itemName}"]`);

        if (existingItem) {
            const quantity = existingItem.querySelector('.quantity');
            quantity.textContent = parseInt(quantity.textContent) + 1;

            const totalPrice = existingItem.querySelector('.total-price');
            totalPrice.textContent = (parseFloat(totalPrice.textContent) + itemPrice).toFixed(2);
        } else {
            const item = document.createElement('div');
            item.setAttribute('data-name', itemName);
            item.innerHTML = `${itemName} x<span class="quantity">1</span> <span class="price-container"><span class="total-price">${itemPrice.toFixed(2)}</span>€</span>`;

            const removeButton = document.createElement('button');

            removeButton.textContent = '-';
            removeButton.style.marginRight = '10px'; 
            removeButton.style.backgroundColor = '#ffff';
            removeButton.style.color = 'red'; 
            removeButton.style.cursor = 'pointer'; 
            removeButton.style.fontSize = '20px'; 
            removeButton.style.border = '1px solid black';
            removeButton.style.justifyContent = 'center'; 
            removeButton.style.alignItems = 'center'; 
            removeButton.style.width = '25px'; 

            removeButton.addEventListener('click', () => {
            const quantity = item.querySelector('.quantity');
            quantity.textContent = parseInt(quantity.textContent) - 1;
            if (parseInt(quantity.textContent) === 0) {
                dropdown.removeChild(item);
            } else {
                const totalPrice = item.querySelector('.total-price');
                totalPrice.textContent = (parseFloat(totalPrice.textContent) - itemPrice).toFixed(2);
            }
            count.textContent = parseInt(count.textContent) - 1;
            updateTotalLine();
            });

            item.prepend(removeButton);
            dropdown.appendChild(item);
        }

        updateTotalLine();
    });
});

function updateTotalLine() {
    const dropdown = document.querySelector('.panier-dropdown');
    const count = document.querySelector('.panier-count');
    const totalLine = dropdown.querySelector('.total-line');
    if (totalLine) dropdown.removeChild(totalLine);

    const newTotalLine = document.createElement('div');
    newTotalLine.classList.add('total-line');
    newTotalLine.style.textAlign = 'right';
    dropdown.appendChild(newTotalLine);

    const totalCartPrice = Array.from(dropdown.querySelectorAll('.total-price'))
        .reduce((total, priceElement) => total + parseFloat(priceElement.textContent), 0);

    newTotalLine.textContent = `Total : ${count.textContent} articles, ${totalCartPrice.toFixed(2)}€`;
}

document.addEventListener('DOMContentLoaded', () => {
    updateTotalLine();
});