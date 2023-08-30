import {
  getInventory,
  addProduct,
  getProduct,
  modifyProductCount,
  removeProduct,
} from "./inventoryManagement.js";

import promptSync from "prompt-sync";

let prompt = promptSync();

// let name = prompt("name? ");
//Without touching a single line of code from step 1, implement this module in a console app that the user can interface with.

//GET INVENTORY
let showInventory = () => {
  console.log("Product Name | Count");
  console.log("-------------|------");
  getInventory().forEach((p) => {
    console.log(p.name + " ".repeat(13 - p.name.length) + "| " + p.count);
  });
};

//ADD ITEM
const addItem = () => {
  let productName = prompt("Enter the name of the product you want to add: ");
  let count = prompt("Enter the quantity: ");
  let newCount = parseInt(count);

  console.log(`You added ${productName}, with a quantity of ${newCount}`);

  addProduct(productName, newCount);
};

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
let removeItem = () => {
  let itemToRemove = prompt(
    "Enter the name of the product you want to remove: "
  );

  let item = getProduct(itemToRemove);
  console.log(item);
  let itemCount = item.count * -1;

  modifyProductCount(itemToRemove, itemCount);

  removeProduct(itemToRemove);

  console.log(getInventory());
};

const intro = () => {
  let whileLoop = true;
  while (whileLoop) {
    console.log(
      "\n1. Get Inventory. \n2. Add Item. \n3. Update Inventory. \n4. Remove Item. \n5. Exit "
    );
    let userChoice = prompt("What would you like to do? ");
    let choiceInt = parseInt(userChoice);
    try {
      if (choiceInt == 5) {
        whileLoop = exit();
      } else if (choiceInt == 1) {
        showInventory();
      } else if (choiceInt == 2) {
        addItem();
      } else if (choiceInt == 3) {
        updateInventory();
      } else if (choiceInt == 4) {
        removeItem();
      }
    } catch (error) {
      console.log(error);
    }
  }
};

const exit = () => {
  console.log("Bye!");
  return false;
};

intro();
// 1. View inventory
// 2. Add inventory
// 3. Update inventory
// 4. Remove inventory
