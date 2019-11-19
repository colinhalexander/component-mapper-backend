exports.up = function(knex) {
  return knex.schema.table('projects', (t) => {
    t.integer('user_id')
    t.foreign('user_id').references('users.id')
  })
};

exports.down = function(knex) {
  return knex.schema.table('projects', (t) => {
    t.dropColumn('user_id')
  })
};
