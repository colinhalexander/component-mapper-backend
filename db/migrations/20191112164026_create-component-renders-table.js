exports.up = function(knex) {
  return knex.schema.createTable('component_renders', (t) => {
    t.integer('parent_id')
      t.foreign('parent_id').references('components.id')
    t.integer('child_id')
      t.foreign('child_id').references('components.id')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('component_renders')
};
