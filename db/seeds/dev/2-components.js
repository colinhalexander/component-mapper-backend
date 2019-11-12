exports.seed = function(knex) {

  return knex('components').del()
    .then(function () {
      return knex('components').insert([
        {
          name: 'App',
          type: 'class',
          notes: 'Top level component, holds routes, state (just user info for now)',
          project_id: '1'
        },
        {
          name: 'LandingPage',
          type: 'class',
          notes: '',
          project_id: '1'
        },
        {
          name: 'HowToPage',
          type: 'functional',
          notes: 'Displays instructions for using the app',
          project_id: '1'
        }
      ]);
    });
};