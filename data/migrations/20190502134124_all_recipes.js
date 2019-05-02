exports.up = function(knex, Promise) {
  return knex.schema
    .createTable("dishes", tbl => {
      tbl.increments("dish_id");
      tbl
        .string("dish_name", 128)
        .notNullable()
        .unique();
    })
    .createTable("recipes", tbl => {
      tbl.increments("recipe_id");
      tbl
        .string("recipe_name", 128)
        .notNullable()
        .unique();
      tbl
        .integer("dish_id")
        .unsigned()
        .notNullable()
        .references("dish_id")
        .inTable("dishes")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE");
    })
    .createTable("measurements", tbl => {
      tbl.increments("measurement_id");
      tbl
        .string("measurement_name", 128)
        .notNullable()
        .unique();
    })
    .createTable("ingredients", tbl => {
      tbl.increments("ingredient_id");
      tbl
        .string("ingredient_name", 128)
        .notNullable()
        .unique();
      //   tbl
      //     .integer("measurement_id")
      //     .unsigned()
      //     .notNullable()
      //     .references("measurement_id")
      //     .inTable("measurements")
      //     .onDelete('RESTRICT')
      //     .onUpdate('CASCADE');
    })
    .createTable("recipe_ingredients", tbl => {
      tbl.increments();
      tbl.decimal("amount");
      tbl
        .integer("recipe_id")
        .unsigned()
        .notNullable()
        .references("recipe_id")
        .inTable("recipes")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE");
      tbl
        .integer("ingredients_id")
        .unsigned()
        .notNullable()
        .references("ingredients_id")
        .inTable("ingredients")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE");
      tbl
        .integer("measurement_id")
        .unsigned()
        .notNullable()
        .references("measurement_id")
        .inTable("measurements")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE");
    });
};

exports.down = function(knex, Promise) {
  return knex.schema
    .dropTableIfExists("recipe_ingredients")
    .dropTableIfExists("ingredients")
    .dropTableIfExists("measurements")
    .dropTableIfExists("recipes")
    .dropTableIfExists("dishes");
};
