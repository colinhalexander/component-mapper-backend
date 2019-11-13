exports.seed = function(knex) {

  return knex('component_renders').del()
    .then(function () {
      return knex('component_renders').insert([
        { parent_id: 9, child_id: 10 },
        { parent_id: 9, child_id: 11 },
        { parent_id: 9, child_id: 14 },
        { parent_id: 10, child_id: 12 },
        { parent_id: 10, child_id: 13 },
        { parent_id: 11, child_id: 12 },
        { parent_id: 11, child_id: 13 },
        { parent_id: 14, child_id: 15 },
        { parent_id: 15, child_id: 16 }
      ]);
    });
};
