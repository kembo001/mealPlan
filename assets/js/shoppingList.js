//  selectors 
var numberOfItems = document.getElementById("numberOfItems").innerHTML;
var nameOfItem = document.getElementById("nameOfItem").innerHTML;
var setCart;
var emptyListText = document.getElementById("emptyList")
var removeButton = document.getElementById('removeItem');
var saveItems = document.getElementById("saveItems");
var cart = document.getElementById("shoppingListContainer")

cart.style.visibility = 'hidden';

saveItems.addEventListener('click', function(){
    console.log('saved')
    setCart = []
        var entry ={
            "name": nameOfItem,
            "Numberofitems":numberOfItems
        };
        setCart.push(entry);
        localStorage.setItem('cart', JSON.stringify(setCart));
        resetCart()
});


// global variables
for (var i = 0; i < removeButton.length; i++){
    var button = removeButton[i]
    button.addEventListener('click', function() {
        console.log("remove")
        // list.remove()
    })
}

// functions
function shoppingCart(){
    emptyListText.style.visibility = 'hidden';
    cart.style.visibility = 'visible';
}
shoppingCart()


function resetCart(){
   
}





