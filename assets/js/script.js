
var confirmButton = $(".cuisineConfirm")
var cuisineSelection;



function getAPI() {
    var url = "https://api.spoonacular.com/recipes/complexSearch?cuisine=" + cuisineSelection + "&apiKey=7422e4770d3c4bdbb9679e356fa65ecf";
    fetch(url)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
        displayResults(data);
    })
    
}

function displayResults (data) {
    for( i = 0; i < 3; i++) {
    var resultsContainer = $(".searchResults")
    var recipeResults = $("<button>")
   
    recipeResults.text(data.results[i].title)
    console.log(recipeResults)
    resultsContainer.append(recipeResults)
    recipeResults.on('click', function(){
        var recipeId = $(this).data.results[0].id;
        console.log(recipeId)
    
    })
    }
   
    // getRecipe(recipeId);
}




// function getRecipe(recipeId){
//     var recipe = "https://api.spoonacular.com/recipes/"+recipeId+"/summary&apiKey=7422e4770d3c4bdbb9679e356fa65ecf"
//     fetch(recipe)
//     .then(function (response) {
//         return response.json();
//     })
//     .then(function (data) {
//         console.log(data);
       
//     })
// }


confirmButton.on("click", function(){
    cuisineSelection = $(".form-control").val()

getAPI(cuisineSelection);    
})