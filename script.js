
var confirmButton = $(".cuisineConfirm")
var cuisineSelection;



function getAPI() {
    var url = "https://api.spoonacular.com/recipes/complexSearch?cuisine=" + cuisineSelection + "&apiKey=7422e4770d3c4bdbb9679e356fa65ecf";
    fetch(url)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data)
    })
}



confirmButton.on("click", function(){
    cuisineSelection = $(".form-control").val()

getAPI(cuisineSelection);    
})