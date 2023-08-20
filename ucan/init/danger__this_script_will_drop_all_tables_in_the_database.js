const fs = require('fs');
const path = require('path');
const sqlite3 = require('sqlite3').verbose();

const environment = 'development';

const dbPath = path.join(__dirname, '..', 'database', `${environment}.sql`); 
const sqlFilePath = path.join(__dirname, '..', 'schemas', 'danger__this_script_will_drop_all_tables_in_the_database.sql');
const sql = fs.readFileSync(sqlFilePath, 'utf8');

const db = new sqlite3.Database(dbPath, (err) => {if (err) console.error(err.message); console.log('Connected to the database.');});

(async () => {
  await db.exec(sql, (err) => {if (err) console.error(err.message); console.log('Database initialized.');});
  await db.close((err) => {if (err) console.error(err.message); console.log('Database connection closed.');});
})();