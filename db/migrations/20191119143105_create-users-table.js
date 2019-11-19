exports.up = function(knex) {
  return knex.schema.createTable('users', (t) => {
    t.increments()
    
    t.string('github_id')
    t.string('username')
    t.string('display_name')
    t.string('bio')
    t.string('email')
    t.string('avatar_url')

    t.timestamps()
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('users')
};