var confirmButton = $(".cuisineConfirm")
var cuisineSelection;



function getAPI() {
    var url = "https://api.spoonacular.com/recipes/complexSearch?cuisine=" + cuisineSelection + "&apiKey=7422e4770d3c4bdbb9679e356fa65ecf";
    fetch(url)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            console.log(data);
            displayResults(data);
        })

}

function displayResults(data) {
    $(".searchResults").empty();
    for (i = 0; i < 8; i++) {
        var resultsContainer = $(".searchResults")
        var recipeResults = `<button class="recipe" value=${data.results[i].id}> ${data.results[i].title}</button>`

        console.log(recipeResults)
        resultsContainer.append(recipeResults)
    }

    $('.recipe').on('click', function(event) {
        var recipeId = event.target.value;
        console.log(recipeId)
        getRecipeApi(recipeId);
        getIngredientsApi(recipeId);
    })
}



function getRecipeApi(recipeId) {
    var recipe = "https://api.spoonacular.com/recipes/" + recipeId + "/information?&apiKey=7422e4770d3c4bdbb9679e356fa65ecf"
    fetch(recipe)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            console.log(data);
            $(".selectedRecipe").empty()
                var cardContainer = $(".selectedRecipe")
                var recipeTitle = $("<div>")
                recipeTitle.text(data.title)
                cardContainer.append(recipeTitle)
                var recipeImage;
                var recipeInstructions = $("<div>")
                recipeInstructions.text(data.instructions)
                cardContainer.append(recipeInstructions)
         });

}

// function getRecipeCard(data) {

//     for (i = 0; i < data) {
//     var cardContainer = $(".selectedRecipe")
//     var recipeTitle = $("<div>")
//     var recipeImage;
//     var recipeInstructions = $("<div>")
//     }

// }

function getIngredientsApi(recipeId) {
    var ingredients = "https://api.spoonacular.com/recipes/" + recipeId + "/ingredientWidget.json?&apiKey=7422e4770d3c4bdbb9679e356fa65ecf"
    fetch(ingredients)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            console.log(data);
            $("#recipeIngredients").empty();
            for (i = 0; i < data.ingredients.length; i++) {
                var recipeList = $("<div>")
                console.log(data.ingredients[i].name);
                recipeList.text(data.ingredients[i].name)
                $("#recipeIngredients").append(recipeList)
            }
        })

}


confirmButton.on("click", function() {
    cuisineSelection = $(".form-control").val()

    getAPI(cuisineSelection);
})