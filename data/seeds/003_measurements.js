
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('measurements').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('measurements').insert([
        {measurement_name: 'cups'},
        {measurement_name: 'tablespoons'},
        {measurement_name: 'teaspoons'}
      ]);
    });
};
