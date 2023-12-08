/** Challenge: 
    - Iterate over the wishlist array.
    - Dynamically render your wishlist from the array.
    - Style the wishlist with CSS.
*/

let wishListHtml = document.getElementById("wishlist")
let btn = document.getElementById("button")
btn.addEventListener("click", onButtonClick)

const wishlist = [
  // TODO: Add more items here
  "A dog",
  "A pet raccoon",
  "A pet opossum"
]

function getWishList(list) {
    list.forEach(item => {
        console.log(item)
        // creating a new list item element
        const listItem = document.createElement("li")
        listItem.textContent = item
        wishListHtml.appendChild(listItem)
        addRemoveBtn(listItem);
    })
    return wishListHtml
}

getWishList(wishlist)


function onButtonClick() {
    const myTextValue = document.getElementById("myText").value
    
    //with .trim(), spaces are ignored and we're checking for the actual content of the input
    //ex:___hello will be accepted, "" is not
    if (myTextValue.trim() === "") {
        alert("Please enter a value before adding to the wishlist.");
        return
    }
    
    const listItem = document.createElement("li")
    listItem.textContent = myTextValue
    wishListHtml.appendChild(listItem)
    console.log(myTextValue)
    addRemoveBtn(listItem)
    clearField()
}

function clearField() {
    document.getElementById("myText").value = ""
}

function addRemoveBtn(listItem) {
    const removeBtn = document.createElement("button")
    removeBtn.setAttribute("class", "remove-button")
    removeBtn.innerHTML = "Delete"
    removeBtn.addEventListener("click", function() {
        wishListHtml.removeChild(listItem)
        removeBtn.parentNode.removeChild(removeBtn)
    })
    listItem.appendChild(removeBtn)
}



// HTML:

// <!doctype html>
// <html>
//     <head>
//         <title>My Wishlist</title>
//         <link rel="stylesheet" href="index.css">
//     </head>
//     <body>
//         <h1>My Wishlist</h1>
//         <div class="container">
//             <input type="text" id="myText" value="">
//             <button id="button">Add</button>
//             <div id="list-container">
//                 <div id="wishlist"> </div>
//             </div>
//         </>
//         <script src="index.js"></script>
//     </body>
// </html>


// CSS:

// /* Image by <a href="https://www.freepik.com/free-photo/christmas-composition-fir-tree-branches-gifts_3180919.htm#query=christmas%20background&position=6&from_view=keyword&track=ais&uuid=855d9beb-802c-4d40-b190-24eff0faf519">Freepik</a> */

// html, body {
//     margin: 0;
//     padding: 0;
//     font-family: 'Arial', sans-serif;
//     background-image: url(https://img.freepik.com/free-photo/christmas-composition-fir-tree-branches-gifts_23-2147950494.jpg?w=2000&t=st=1702004773~exp=1702005373~hmac=9e2d74982c3195b2031a493e99e8967fee7e7e96955c9db41ab9f908266caa1d);
// }

// h1 {
//     margin: 25px;
//     text-align: center;
//     color: white;
// }

// .container {
//     margin: 20px;
//     padding: 20px;
//     background: #fff;
//     box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
// }

// #myText {
//     margin-right: 10px;
// }

// #button {
//     background: #4caf50;
//     color: #fff;
//     cursor: pointer;
// }

// .remove-button {
//     background: #e53935;
//     color: #fff;
//     border: none;
//     padding: 5px 10px;
//     cursor: pointer;
// }

// #wishlist {
//     list-style: none;
//     padding: 0;
// }


// #list-container {
//     margin-top: 20px;
// }

// li {
//     background: #fff;
//     padding: 10px;
//     margin-bottom: 10px;
//     display: flex;
//     align-items: center;
//     justify-content: space-between;
// }

