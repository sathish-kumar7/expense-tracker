'use strict';

var dbm;
var type;
var seed;

/**
  * We receive the dbmigrate dependency from dbmigrate initially.
  * This enables us to not have to rely on NODE_PATH.
  */
exports.setup = function(options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

exports.up = function(db, callback) {
  db.createTable('expenses', {
    id: { type: 'int', primaryKey: true, autoIncrement: true },
    description: 'string',
    amount: 'decimal',
    category: 'string',
    date: 'date',
    created_at: {
      type: 'timestamp',
      defaultValue: new String('CURRENT_TIMESTAMP')
    }
  }, callback);
};

exports.down = function(db) {
  return db.runSql(`
    DROP TABLE expenses;
  `);
};

exports._meta = {
  "version": 1
};
