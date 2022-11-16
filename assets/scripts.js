let currentPrice=0, itemCount=0

function addToCart(cookie) {
    /* 
        PRICES
        peanut butter: 20
        sandies: 30
        party press: 35
        chocolate chip: 25
    */

   console.log('The user is adding this type of cookie to their cart: ' , cookie) 

   //add 1 to the itemCount variable
   itemCount = itemCount+1
    console.log(itemCount)

    //print itemcount to cartItems id
    document.getElementById("cartItems").innerText = itemCount

   //add the correct price to the currentPrice variable
   if (cookie == 'peanut butter') {
    currentPrice = currentPrice + 20
    }
    else if (cookie == 'sandies') {
    currentPrice = currentPrice + 30
    }
    else if (cookie == 'party press') {
    currentPrice = currentPrice + 35
    }
    else if (cookie == 'chocolate chip') {
    currentPrice = currentPrice + 25
    }

console.log(currentPrice)
//print currentPrice from if statement to hovertext id
document.querySelector(".hoverText").innerHTML = "$" + currentPrice
}

function checkout() {
    console.log('User is checking out.')
    //Let your customer know how many items they are purchasing and the price
    
    prompt(`You have ${itemCount} items that will cost $${currentPrice}.  Please provide your Name and Address in the prompt below for your bill.\n` + '\nThank you for shopping with us!')

    currentPrice = 0
    itemCount = 0

    document.querySelector(".hoverText").innerHTML = "$" + currentPrice
    document.getElementById("cartItems").innerText = itemCount
}

function darkMode() {
    document.querySelector("body").style.backgroundColor = "black"
    document.querySelector("main").style.color = "white"
    document.querySelector("header").style.color = "white"
} 
