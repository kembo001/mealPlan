
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
    for( i = 0; i < 8; i++) {
    var resultsContainer = $(".searchResults")
    var recipeResults = `<button class="recipe" value=${data.results[i].id}> ${data.results[i].title}</button>`
   
    console.log(recipeResults)
    resultsContainer.append(recipeResults)
    }

    $('.recipe').on('click', function(event){
        var recipeId = event.target.value;
        console.log(recipeId)
        getRecipeApi(recipeId);
        getIngredientsApi(recipeId);
    })
}



function getRecipeApi(recipeId){
    var recipe = "https://api.spoonacular.com/recipes/"+recipeId+"/information?&apiKey=7422e4770d3c4bdbb9679e356fa65ecf"
    fetch(recipe)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
    });
  
}

function getIngredientsApi(recipeId){
    var ingredients = "https://api.spoonacular.com/recipes/"+recipeId+"/ingredientWidget.json?&apiKey=7422e4770d3c4bdbb9679e356fa65ecf"
    fetch(ingredients)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);   
    })
}


confirmButton.on("click", function(){
    cuisineSelection = $(".form-control").val()

getAPI(cuisineSelection);    
})