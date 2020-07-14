exports.up = function (knex) {
  return knex.schema.createTable('projects', (tbl) => {
    tbl.increments();
    tbl.json('img_src');
    tbl.string('title').notNullable();
    tbl.string('github_link').notNullable();
    tbl.string('live_link');
    tbl.string('description').notNullable();
    tbl.string('role').notNullable();
    tbl.string('built_with').notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('projects');
};
