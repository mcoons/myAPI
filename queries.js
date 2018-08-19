const database = require("./database-connection");

module.exports = {

  list() {
    return database("person")
      .select()
      .orderBy("last_name");
  }

//   create(person) {
//     return database("person")
//       .from("person")
//       .insert(person)
//       .returning("*")
//       .then(record => record[0]);
//   },

//   read(attribute, value) {
//     return database("person")
//       .select()
//       .where(attribute, value)
//       .orderBy("last_name");
//   },

//   update(id, person) {
//     return database("person")
//       .update(person)
//       .where("id", id)
//       .returning("*")
//       .then(record => record[0]);
//   },

//   delete(id) {
//     return database("person")
//       .delete()
//       .where("id", id);
//   }

};
