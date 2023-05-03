// Copyright (c) 2023 Yuri G All rights reserved
//
// Created by: Yuri G
// Created on: April 2023
// This file contains the JS functions for index.html

"use strict"

/**
 * This function displays an alert.
 */
function myButtonClicked() {
  const TAX = 1.13
  const cone = 2
  const size = parseFloat(document.getElementById("ice-cream-size").value)
  const topping = parseFloat(document.getElementById("ice-cream-toppings").value)

  const basePriceNoTAX = size + topping
  const basePrice = basePriceNoTAX * TAX
  const onCone = (basePriceNoTAX + cone) * TAX

  const buttonOnChecked = document.getElementById("flash1").checked

  if (buttonOnChecked == true) {
    document.getElementById("Cost").innerHTML =
      "Your total is: $" + onCone.toFixed(2) + " including tax."
  } else {
    document.getElementById("Cost").innerHTML =
      "Your total is: $" + basePrice.toFixed(2) + " including tax."
  }
}
