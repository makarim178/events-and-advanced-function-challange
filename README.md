---
difficulty: 2
tags: codechallenge, training, JavaScript
chapter: "Chapter 9: Challenge Roundup"
training: true
---

# Events and Advanced Functions Challenge

## Challenge Description

You are tasked with implementing two requirements that involve event handling, DOM manipulation, and advanced functions.

## Requirements

- Requirement 1: Event Handling and Dom Manipulation

  - When the mouse is over the element with the id `button`, add the class `.hovered` to the element.
  - When the mouse is out of the element with the id `button`, remove the class `.hovered` from the element.
  - When the user types in the input with the id `nameInput`, update the text of the element with the id `nameDisplay` to the value of the input in realtime.
  - When the user clicks the button with the id `button`, use `alert` to show the message `Hello, <name>!` where `<name>` is the value of the input with the id `nameInput`.

Once you have completed "Requirement 1", you should be able to see the following behavior:

![Requirement 1 Demo](https://api.certificates.dev/storage/js-l2-training-9-4-0.gif)

- Requirement 2: Advanced Functions
  - Complete the `createDiscount(precentage)` function:
    - This should be a higher-order function.
    - It takes a discount percentage as a parameter and returns a callback function.
    - The returned function takes a single cart item as its argument.
    - It returns a new cart item object, with the `price` updated to reflect the discount.
    > 💡 HINT: Apply the discount using the formula: `price * (1 - percentage / 100)`

  - Complete the `discountFunction` function:
    - Use the createDiscount function you just defined.
    - Pass in the predefined discountPercentage variable.
    - This will give you a closure function that applies the discount.
  - Complete the `discountedCart` constant:
    - Use an Immediately Invoked Function Expression (IIFE) to:
      - Call the already defined `applyDiscount` function,
      - Pass in the cart array and the `discountFunction`,
      - Return the result.
  - Complete the `displayCart(cart, callback)` function:
    - This function should:
      - Take two parameters: a cart array and a callback function,
      - Call the callback function, passing it the cart.
  - Finally, trigger the `displayCart` function with the following arguments:
    - For the first argument, pass the `discountedCart` array.
    - For the second argument, pass a callback that:
      - Store the DOM element with the `id=cart` in a variable.
      - Invokes `updateDom`, passing the cart and the variable with the DOM element.

Once you have completed "Requirement 2", you should be able to see the following behavior:

![Requirement 2 Demo](https://api.certificates.dev/storage/js-l2-training-9-4-1.png)

## Other Considerations

- Don't remove the `export` keyword from functions. It is required for the automated tests to run.
