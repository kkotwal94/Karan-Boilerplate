import moment from 'moment';

export const db =
  process.env.MONGOHQ_URL || process.env.MONGODB_URI || 'mongodb://localhost/Products';

export const currentUTC = moment
  .utc()
  .local()
  .format('YYYY-MM-DD HH:mm:ss');

export default {
  db,
  currentUTC,
};
