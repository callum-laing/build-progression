var inventory = [];

function clone(obj) {
  return JSON.parse(JSON.stringify(obj));
}

/**
 * @typedef {Object} Product
 * @property {string} name
 * @property {int} count
 */

/**
 *
 * @returns {Array<Product>}
 */
function getInventory() {
  return clone(inventory);
}

/**
 * Gets a product by name
 * @param {string} name
 * @returns {Product}
 */
function getProduct(name) {
  let product = inventory.find((p) => p.name == name);
  if (product == null || product == undefined) {
    throw new Error("Product does not exist");
  }
  return clone(product);
}

/**
 * Add product with initial supply/count
 * @param {string} productName
 * @param {int} count
 */
function addProduct(productName, count) {
  if (!Number.isInteger(count)) {
    throw new Error("count is not an integer");
  }
  inventory.push({ name: productName, count });
}

/**
 * Remove product from the inventory, as long as it
 * exists, and it's count/supply is empty (count = 0)
 * @param {string} productName
 */
function removeProduct(productName) {
  let product = inventory.find((p) => p.name == productName);
  if (product == null || product == undefined) {
    throw new Error("Product does not exist");
  }

  if (product.count != 0) {
    throw new Error(
      "Product has inventory, remove inventory before removing product"
    );
  }

  inventory = inventory.filter((p) => p !== product);
}

/**
 * Can modify the count of a product
 * count can be positive or negative depending on whether adding or subtracting supply.
 * For example `modifyProductCount("Apple" -5)` will decrease the "Apple" product
 * count by 5
 * @param {string} productName
 * @param {int} count
 */
function modifyProductCount(productName, count) {
  let product = inventory.find((p) => p.name == productName);
  if (!Number.isInteger(count)) {
    throw new Error("count is not an integer");
  }
  if (product == null || product == undefined) {
    throw new Error("Product does not exist");
  }

  product.count = product.count + count;
}

export {
  getInventory,
  getProduct,
  addProduct,
  removeProduct,
  modifyProductCount,
};
