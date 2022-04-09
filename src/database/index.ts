import { createConnection } from 'typeorm';

createConnection()
  .then(() => console.log('Database connection successful'))
  .catch(err => console.log('Database connection failed ->', err.message || err));