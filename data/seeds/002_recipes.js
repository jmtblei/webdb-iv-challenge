
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {recipe_name: 'Sashimi', dish_id: 1},
        {recipe_name: 'Hand rolls', dish_id: 1},
        {recipe_name: 'Chicken tacos', dish_id: 2},
        {recipe_name: 'Bean burritos', dish_id: 3},
        {recipe_name: 'Country fried steak', dish_id: 4},
        {recipe_name: 'Chinese roasted duck', dish_id: 4},
        {recipe_name: 'Chickpea hummus', dish_id: 5},
        {recipe_name: 'Eggplant hummus', dish_id: 5},
        {recipe_name: 'Meat pizza', dish_id: 6},
        {recipe_name: 'Veggie pizza', dish_id: 6},
        {recipe_name: 'Classic burger', dish_id: 7},
        {recipe_name: 'Shrimp pasta', dish_id: 8},
        {recipe_name: 'Chicken pasta', dish_id: 8}
      ]);
    });
};
