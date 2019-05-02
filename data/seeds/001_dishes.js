
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('dishes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('dishes').insert([
        {dish_name: 'Sushi'},
        {dish_name: 'Tacos'},
        {dish_name: 'Burritos'},
        {dish_name: 'Steak'},
        {dish_name: 'Roasted Duck'},
        {dish_name: 'Hummus'},
        {dish_name: 'Pizza'},
        {dish_name: 'Hamburgers'},
        {dish_name: 'Pasta'}
      ]);
    });
};
