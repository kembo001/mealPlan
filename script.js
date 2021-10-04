var url = "https://api.spoonacular.com/recipes/716429/information?apiKey=7422e4770d3c4bdbb9679e356fa65ecf&includeNutrition=true"
var confirmButton = $(".cuisineConfirm")

confirmButton.on("click", function(){

getAPI();    
})

function getAPI() {
    fetch(url)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data)
    })
}