
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('person').del()
    .then(function () {
      // Inserts seed entries
      return knex('person').insert([
        {id: 1, first_name: 'Tommy', last_name: 'Tester', address: '', cell_number: '', work_number : '', email: '', image_URL: ''},
        {id: 2, first_name: 'Tommy', last_name: 'Tester', address: '', cell_number: '', work_number : '', email: '', image_URL: ''},
        {id: 3, first_name: 'Tommy', last_name: 'Tester', address: '', cell_number: '', work_number : '', email: '', image_URL: ''}
      ]);
    });
};
