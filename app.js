import {
  getInventory,
  addProduct,
  getProduct,
  modifyProductCount,
  removeProduct,
} from "./inventoryManagement.js";

// let name = prompt("name? ");
//Without touching a single line of code from step 1, implement this module in a console app that the user can interface with.

//GET INVENTORY
const showInventory = () => {
  const inventoryList = document.getElementById("inventoryList");

  let inventoryListHtml = "<ul>";
  getInventory().forEach((p) => {
    inventoryListHtml += `<li> ${p.name} ${p.count} <button data-name="${p.name}"class="removeItemBtn">Remove</button></li>`;
  });
  inventoryListHtml += "</ul>";
  inventoryList.innerHTML = inventoryListHtml;

  document.querySelectorAll(".removeItemBtn").forEach((btn) => {
    btn.addEventListener("click", removeItem);
  });
};

//ADD ITEM
const addItem = (event) => {
  event.preventDefault();

  let productNameInput = document.getElementById("productName");
  let quantityInput = document.getElementById("quantity");

  let productName = productNameInput.value;
  let newCount = parseInt(quantityInput.value);

  productNameInput.value = "";
  quantityInput.value = "";

  console.log(`You added ${productName}, with a quantity of ${newCount}`);

  addProduct(productName, newCount);
  showInventory();
  return false;
};
document.getElementById("productForm").addEventListener("submit", addItem);

//UPDATE INVENTORY
let updateInventory = () => {
  let itemToUpdate = prompt(
    "What product do you want to add more quantity to?: "
  );
  let amountToAdd = prompt("How many are you adding?: ");
  let amountAsInt = parseInt(amountToAdd);

  modifyProductCount(itemToUpdate, amountAsInt);
  let updatedItem = getProduct(itemToUpdate);
  console.log(updatedItem);
};

//REMOVE ITEM
let removeItem = (e) => {
  let itemToRemove = e.target.dataset.name;

  let item = getProduct(itemToRemove);
  console.log(item);
  let itemCount = item.count * -1;

  modifyProductCount(itemToRemove, itemCount);

  removeProduct(itemToRemove);

  console.log(getInventory());
  showInventory();
};
