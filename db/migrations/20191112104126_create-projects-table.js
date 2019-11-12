exports.up = function(knex) {
  return knex.schema.createTable('projects', (t) => {
    t.increments()
    t.string('name')
    t.string('description')

    t.timestamps()
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('projects')
};
