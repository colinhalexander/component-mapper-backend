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
        },
        {
          name: 'NavBar',
          type: 'functional',
          notes: 'a bar that navigates',
          project_id: '1'
        },
        {
          name: 'Footer',
          type: 'functional',
          notes: '',
          project_id: '1'
        },
        {
          name: 'ProjectPage',
          type: 'class',
          notes: '',
          project_id: '1'
        },
        {
          name: 'ComponentLevel',
          type: 'class',
          notes: '',
          project_id: '1'
        },
        {
          name: 'Komponent',
          type: 'class',
          notes: '',
          project_id: '1'
        }
      ]);
    });
};
