exports.up = function(knex, Promise) {
    return knex.schema.createTable('person', function(table) {
      table.increments()
      table.text('first_name')
      table.text('last_name')
      table.text('address')
      table.text('cell_number')
      table.text('work_number')
      table.text('email')
      table.text('image_URL')
    })
  }
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTable('person')
  }