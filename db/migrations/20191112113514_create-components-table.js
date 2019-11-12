exports.up = function(knex) {
  return knex.schema.createTable('components', (t) => {
    t.increments()

    t.string('name')
    t.string('type')
    t.string('notes')

    t.integer('project_id')
    t.foreign('project_id').references('projects.id')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('projects')
};
