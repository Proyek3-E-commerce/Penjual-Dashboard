// manage_product.js

// Handle Add Product button
const addProductButton = document.getElementById('add-product');
addProductButton.addEventListener('click', () => {
  // Future implementation for adding products
  alert('Feature to add a product coming soon!');
});

// Handle Edit and Delete buttons
const productTable = document.querySelector('.product-table tbody');

productTable.addEventListener('click', (event) => {
  const target = event.target;

  if (target.classList.contains('edit-btn')) {
    const row = target.closest('tr');
    const productId = row.children[0].textContent;
    const productName = row.children[1].textContent;

    alert(`Edit feature for Product ID: ${productId} - ${productName} is under development.`);
  }

  if (target.classList.contains('delete-btn')) {
    const row = target.closest('tr');
    const productId = row.children[0].textContent;
    const productName = row.children[1].textContent;

    const confirmDelete = confirm(`Are you sure you want to delete Product ID: ${productId} - ${productName}?`);
    if (confirmDelete) {
      row.remove();
      alert('Product has been deleted.');
    }
  }
});

// Future Implementation: Function to dynamically add a new product row
function addProductRow(id, name, price, stock) {
  const newRow = document.createElement('tr');

  newRow.innerHTML = `
    <td>${id}</td>
    <td>${name}</td>
    <td>Rp ${price.toLocaleString()}</td>
    <td>${stock}</td>
    <td>
      <button class="edit-btn">Edit</button>
      <button class="delete-btn">Delete</button>
    </td>
  `;

  productTable.appendChild(newRow);
}
