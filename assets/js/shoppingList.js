//  selectors 


var shoppingList = document.getElementById("shoppingListContainer");


var nameArray = []
var setCart = [];
var getIngredientsForCart = localStorage.getItem
if (localStorage.getItem("cart")) {
    setCart = JSON.parse(localStorage.getItem("cart"))
}
var emptyListText = document.getElementById("emptyList")
var removeButton = document.getElementById('removeItem');

// --------------------------------
// save Item function
// --------------------------------
var saveItems = document.getElementById("saveItems");
var cart = document.getElementById("shoppingListContainer")

cart.style.visibility = 'hidden';
saveItems.style.visibility = 'hidden'

saveItems.addEventListener('click', function(){
    console.log('saved')
    localStorage.setItem('Ingredients', JSON.stringify(nameArray));
});



// get from local storage
var food = JSON.parse(localStorage.getItem("Ingredients"))
console.log(food)
nameArray = food



// --------------------------------
// render Item function
// --------------------------------
function renderItems() {
    shoppingList.innerHTML = "";
    for (i = 0; i < nameArray.length; i++) {
        var row = document.createElement("div");
        row.setAttribute("class", "row");


        var col2 = document.createElement("div");
        var col3 = document.createElement("div");


        col2.setAttribute("class", "col-8 item-name");
        col3.setAttribute("class", "col-2 item-delete");

        var newButton = document.createElement('button');
        newButton.textContent = 'Delete';
        newButton.setAttribute("data-item-idx", i);
        newButton.addEventListener('click', function(event){
            console.log(event.target.dataset.itemIdx)
            var selectedItem = parseInt(event.target.dataset.itemIdx);
            
            
            if(nameArray.splice(selectedItem, 1)){
                console.log(nameArray)
                renderItems()
            }
        })
        

        col2.textContent = nameArray[i];
        col3.appendChild(newButton);


        row.appendChild(col2);
        row.appendChild(col3);

        shoppingList.appendChild(row);
    }
}


// --------------------------------
// shopping Cart function
// --------------------------------
function shoppingCart() {
    if(localStorage.getItem("Ingredients")){
        nameArray = JSON.parse(localStorage.getItem("Ingredients"))
    }
    emptyListText.style.visibility = 'hidden';
    cart.style.visibility = 'visible';
    saveItems.style.visibility = 'visible'
    renderItems()
}





// execute Function
shoppingCart()