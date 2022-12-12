//get the form fields from the query string (GET request)
let formFields = new URLSearchParams(window.location.search)

//insert the name the user gave into the thank you message
document.querySelector("#yourName").innerHTML = 
    `${formFields.get("name")}`

document.querySelector("#yourEmail").innerHTML =
    `${formFields.get("email")}`
