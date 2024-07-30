/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.table('sales', function(table) {
        table.integer('producto_id').unsigned();
        table.foreign('producto_id').references('products.id');
      });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.table('sales', function(table) {
        table.dropForeign('producto_id');
        table.dropColumn('producto_id');
      });
};
