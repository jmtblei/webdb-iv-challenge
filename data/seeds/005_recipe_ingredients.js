
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipe_ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipe_ingredients').insert([
        {id: 1, recipe_id: 1, ingredients_id: 1, amount: 1, measurement_id: 1},
        {id: 2, recipe_id: 2, ingredients_id: 2, amount: 2, measurement_id: 2},
        {id: 3, recipe_id: 3, ingredients_id: 3, amount: 3, measurement_id: 3}
      ]);
    });
};
