exports.seed = function(knex) {

  return knex('projects').del()
    .then(() => {
      return knex('projects').insert([
        {
          name: 'Component Mapper',
          description: 'It maps components for react projects'
        },
        {
          name: 'Example Project',
          description: 'A project, for example'
        },
        {
          name: 'Barkwire',
          description: 'The dating app for dogs!'
        }
      ]);
    });
};
