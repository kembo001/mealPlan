//  selectors 
// var numberOfItems = document.getElementById("numberOfItems").innerHTML;
var nameOfItem = document.getElementById("nameOfItem");
var saveOfItem = document.getElementById("nameOfItem");

var shoppingList = document.getElementById("shoppingListContainer");

// var nameArray = ["tea", "milk","beans"];
var nameArray = ["great"]
var setCart = [];
var getIngredientsForCart = localStorage.getItem
if(localStorage.getItem("cart")){
    setCart = JSON.parse(localStorage.getItem("cart"))
}
var emptyListText = document.getElementById("emptyList")
var removeButton = document.getElementById('removeItem');
var saveItems = document.getElementById("saveItems");
var cart = document.getElementById("shoppingListContainer")

cart.style.visibility = 'hidden';

saveItems.addEventListener('click', function(){
    console.log('saved')
        var entry ={
            // nameArray
        };
        setCart.push(entry);
        localStorage.setItem('cart', JSON.stringify(setCart));
        // resetCart()
});


/*

<li class="list-group-item" id="numberOfItems">1</li>
            <li class="list-group-item" id="nameOfItem"></li>
            <li class="list-group-item" id="removeItem"></li>

*/



// get from local storage
var food = JSON.parse(localStorage.getItem("Ingredients"))
console.log(food)
nameArray = food 



// --------------------------------
// render Item function
// --------------------------------
function renderItems(){
    shoppingList.innerHTML= ""
    for(i=0; i<nameArray.length; i++){
        var row = document.createElement("div");
        row.setAttribute("class", "row");

        var col1 = document.createElement("div");
        var col2 = document.createElement("div");
        var col3 = document.createElement("div");

        col1.setAttribute("class", "col-2 item-index");
        col2.setAttribute("class", "col-8 item-name");
        col3.setAttribute("class", "col-2 item-delete");

        var newButton = document.createElement('button');
        newButton.textContent = 'X';
        newButton.setAttribute("data-item-idx", i);
        newButton.addEventListener('click', function(event){
            console.log(event.target.dataset.itemIdx)
            var selectedItem = parseInt(event.target.dataset.itemIdx);
            //  nameArray.splice(selectedItem, 1);
            // nameArray.push(removeItem)
            // console.log(nameArray)
            // row.remove(selectedItem)
            
            if(nameArray.splice(selectedItem, 1)){
                renderItems()
            }
        })
        col1.textContent = i;
        col2.textContent = nameArray[i];
        col3.appendChild(newButton);

        row.appendChild(col1);
        row.appendChild(col2);
        row.appendChild(col3);

        shoppingList.appendChild(row);
    }
}


// --------------------------------
// shopping Cart function
// --------------------------------
function shoppingCart(){
    emptyListText.style.visibility = 'hidden';
    cart.style.visibility = 'visible';
    renderItems()
}



// -------------------------------
// reset cart function
// -------------------------------
function resetCart(){
   
}

// create an event listener on the parenr element of all delete buttons
// the button clicked on will have a data attribute for the index of the item being removed
// delete that item from the array


// execute Function
shoppingCart()

