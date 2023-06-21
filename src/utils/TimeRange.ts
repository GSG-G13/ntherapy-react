import moment from 'moment';

const TimeRanges = (datetime:string) => {
  const from = moment.utc(datetime).format('HH-mm');
  const to = moment.utc(datetime).add(1, 'hours').format('HH-mm');
  return { from, to };
};

export default TimeRanges;
