var confirmButton = $(".cuisineConfirm")
var cuisineSelection;
var ingredientsBtn = $('.addIngredientBtn')



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
    console.log(data.results.length);
    for (i = 0; i < data.results.length; i++) {
        
        var resultsContainer = $(".searchResults")
        var recipeResults = `<button class="recipe" value=${data.results[i].id}> ${data.results[i].title}</button>`

        console.log(recipeResults);
        resultsContainer.append(recipeResults);
    }

    $('.recipe').on('click', function(event) {
        var recipeId = event.target.value;
        console.log(recipeId);
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
            $(".selectedRecipe").empty();
            var cardContainer = $(".selectedRecipe");
            var recipeTitle = $("<div>");
            recipeTitle.addClass("title");
            recipeTitle.text(data.title);
            cardContainer.append(recipeTitle);
            var recipeImage = $(".selectedRecipe").append($('<img>', { id: 'theImg', src: data.image }));
            var recipeInstructions = $("<div>");
            recipeInstructions.addClass("instructions");
            var instructionsUnparsed = JSON.stringify(data.instructions);
            var instructionsParsed = JSON.parse(instructionsUnparsed);
            console.log(instructionsUnparsed);
            console.log(instructionsParsed);
            recipeInstructions.html(data.instructions);
            cardContainer.append(recipeInstructions);

        });

};
var allTheIngredients = JSON.parse(localStorage.getItem("allTheIngredients")) || [];

function getIngredientsApi(recipeId) {
    var ingredientsURL = "https://api.spoonacular.com/recipes/" + recipeId + "/ingredientWidget.json?&apiKey=7422e4770d3c4bdbb9679e356fa65ecf"
    fetch(ingredientsURL)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            console.log(data);
            $("#ingredientsList").empty();
            for (i = 0; i < data.ingredients.length; i++) {
                var recipeList = $("<div>");
                var ingredients = data.ingredients[i].name;
                allTheIngredients.push(ingredients);
                console.log(allTheIngredients);
                // console.log(data.ingredients[i].name);
                recipeList.text(ingredients);
                $("#ingredientsList").append(recipeList);
                
                ingredientsBtn.on('click', function(){
                    localStorage.setItem('Ingredients', JSON.stringify(allTheIngredients));
            })
            }
        });

};


confirmButton.on("click", function() {
    cuisineSelection = $(".form-control").val()

    getAPI(cuisineSelection);
});