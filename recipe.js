// Write a function cakes(), which takes the recipe (object) and the 
// available ingredients (also an object) and returns the maximum number 
// of cakes Pete can bake (integer). For simplicity there are no units for 
// the amounts (e.g. 1 lb of flour or 200 g of sugar are simply 1 or 200). 
// Ingredients that are not present in the objects, can be considered as 0.

function cakes(recipe, available) {
    let numOfCakes = [];
    for (let ingredient in recipe) {
        let multiple = Math.floor(available[ingredient] / recipe[ingredient])
        console.log(multiple);
        if (isNaN(multiple)) {
            console.log('0')
            return 0;
        }
        numOfCakes.push(multiple);
    }
    console.log(Math.min(...numOfCakes));
    return Math.min(...numOfCakes);
}

// must return 2
cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200}); 
// must return 0
cakes({apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100}, {sugar: 500, flour: 2000, milk: 2000}); 