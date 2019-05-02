
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {ingredient_name: 'ingredient1'},
        {ingredient_name: 'ingredient2'},
        {ingredient_name: 'ingredient3'}
      ]);
    });
};
