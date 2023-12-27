/// Optimized by ChatGPT
function organizeChristmasDinner(dishes) {
    const ingredients = {};
    dishes.forEach(dish => {
        const name = dish[0];
        dish.slice(1).forEach(ingredient => {
            ingredients[ingredient] = ingredients[ingredient] || [];
            if (!ingredients[ingredient].includes(name)) {
                ingredients[ingredient].push(name);
            }
        });
    });

    const sortedIngredients = Object.keys(ingredients).sort();
    const result = sortedIngredients.reduce((acc, ingredient) => {
        if (ingredients[ingredient].length > 1) {
            acc.push([ingredient, ...ingredients[ingredient].sort()]);
        }
        return acc;
    }, []);

    return result;
}