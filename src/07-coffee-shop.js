/**
 * ☕ Bean & Brew Cafe
 *
 * Bean & Brew, the cozy neighborhood cafe, wants to go digital! They
 * need a system that calculates the total price of a coffee order.
 * Here's their menu:
 *
 * Base price by size:
 *   - "small"  → $3.00
 *   - "medium" → $4.00
 *   - "large"  → $5.00
 *
 * Add-on for coffee type:
 *   - "regular"    → +$0.00
 *   - "latte"      → +$1.00
 *   - "cappuccino" → +$1.50
 *   - "mocha"      → +$2.00
 *
 * Optional extras:
 *   - whippedCream → +$0.50 (if true)
 *   - extraShot    → +$0.75 (if true)
 *
 * Rules:
 *   - If size is not "small", "medium", or "large", return -1
 *   - If type is not "regular", "latte", "cappuccino", or "mocha", return -1
 *   - Return the total price rounded to 2 decimal places
 *
 * @param {string} size - "small", "medium", or "large"
 * @param {string} type - "regular", "latte", "cappuccino", or "mocha"
 * @param {{ whippedCream?: boolean, extraShot?: boolean }} extras - Optional extras
 * @returns {number} Total price or -1 for invalid input
 */
export function calculateCoffeePrice(size, type, extras = {}) {
  let sizeArr = ["small", "medium", "large"];
  let typeArr = ["regular", "latte", "cappuccino", "mocha"];

  const smallPrice = 3.0;
  const mediumPrice = 4.0;
  const largePrice = 5.0;

  const regularPrice = 0.0;
  const lattePrice = 1.0;
  const cappuccinoPrice = 1.5;
  const mochaPrice = 2.0;

  const whippedCreamPrice = 0.5;
  const extraShotPrice = 0.75;

  let totalPrice;

  if (!sizeArr.includes(size) || !typeArr.includes(type)) {
    return -1;
  }

  if (size === "small") {
    if (type === "regular") {
      if (extras && extras?.whippedCream) {
        totalPrice = smallPrice + regularPrice + whippedCreamPrice;
      } else if (extras && extras?.extraShot) {
        totalPrice = smallPrice + regularPrice + extraShotPrice;
      } else {
        totalPrice = smallPrice + regularPrice;
      }
    } else if (type === "latte") {
      if (extras && extras?.whippedCream) {
        totalPrice = smallPrice + lattePrice + whippedCreamPrice;
      } else if (extras && extras?.extraShot) {
        totalPrice = smallPrice + lattePrice + extraShotPrice;
      } else {
        totalPrice = smallPrice + lattePrice;
      }
    } else if (type === "cappuccino") {
      if (extras && extras?.whippedCream) {
        totalPrice = smallPrice + cappuccinoPrice + whippedCreamPrice;
      } else if (extras && extras?.extraShot) {
        totalPrice = smallPrice + cappuccinoPrice + extraShotPrice;
      } else {
        totalPrice = smallPrice + cappuccinoPrice;
      }
    } else if (type === "mocha") {
      if (extras && extras?.whippedCream) {
        totalPrice = smallPrice + mochaPrice + whippedCreamPrice;
      } else if (extras && extras?.extraShot) {
        totalPrice = smallPrice + mochaPrice + extraShotPrice;
      } else {
        totalPrice = smallPrice + mochaPrice;
      }
    }
  } else if (size === "medium") {
    if (type === "regular") {
      if (extras && extras?.whippedCream) {
        totalPrice = mediumPrice + regularPrice + whippedCreamPrice;
      } else if (extras && extras?.extraShot) {
        totalPrice = mediumPrice + regularPrice + extraShotPrice;
      } else {
        totalPrice = mediumPrice + regularPrice;
      }
    } else if (type === "latte") {
      if (extras && extras?.whippedCream) {
        totalPrice = mediumPrice + lattePrice + whippedCreamPrice;
      } else if (extras && extras?.extraShot) {
        totalPrice = mediumPrice + lattePrice + extraShotPrice;
      } else {
        totalPrice = mediumPrice + lattePrice;
      }
    } else if (type === "cappuccino") {
      if (extras && extras?.whippedCream) {
        totalPrice = mediumPrice + cappuccinoPrice + whippedCreamPrice;
      } else if (extras && extras?.extraShot) {
        totalPrice = mediumPrice + cappuccinoPrice + extraShotPrice;
      } else {
        totalPrice = mediumPrice + cappuccinoPrice;
      }
    } else if (type === "mocha") {
      if (extras && extras?.whippedCream) {
        totalPrice = mediumPrice + mochaPrice + whippedCreamPrice;
      } else if (extras && extras?.extraShot) {
        totalPrice = mediumPrice + mochaPrice + extraShotPrice;
      } else {
        totalPrice = mediumPrice + mochaPrice;
      }
    }
  } else if (size === "large") {
    if (type === "regular") {
      if (extras && extras?.whippedCream) {
        totalPrice = largePrice + regularPrice + whippedCreamPrice;
      } else if (extras && extras?.extraShot) {
        totalPrice = largePrice + regularPrice + extraShotPrice;
      } else {
        totalPrice = largePrice + regularPrice;
      }
    } else if (type === "latte") {
      if (extras && extras?.whippedCream) {
        totalPrice = largePrice + lattePrice + whippedCreamPrice;
      } else if (extras && extras?.extraShot) {
        totalPrice = largePrice + lattePrice + extraShotPrice;
      } else {
        totalPrice = largePrice + lattePrice;
      }
    } else if (type === "cappuccino") {
      if (extras && extras?.whippedCream) {
        totalPrice = largePrice + cappuccinoPrice + whippedCreamPrice;
      } else if (extras && extras?.extraShot) {
        totalPrice = largePrice + cappuccinoPrice + extraShotPrice;
      } else {
        totalPrice = largePrice + cappuccinoPrice;
      }
    } else if (type === "mocha") {
      if (extras && extras?.extraShot && extras?.whippedCream) {
        totalPrice =
          largePrice + mochaPrice + extraShotPrice + whippedCreamPrice;
      } else if (extras && extras?.whippedCream) {
        totalPrice = largePrice + mochaPrice + whippedCreamPrice;
      } else if (extras && extras?.extraShot) {
        totalPrice = largePrice + mochaPrice + extraShotPrice;
      } else {
        totalPrice = largePrice + mochaPrice;
      }
    }
  }

  return totalPrice;
}
