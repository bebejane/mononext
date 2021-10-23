import moment from 'moment';
const formatDate = (date) => moment(date).format('YYYY-DD-MM HH:mm');
export { formatDate }