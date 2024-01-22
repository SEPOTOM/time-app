import { TimeState } from '../../types';

const isTimeZero = ({ seconds, minutes, hours }: TimeState): boolean => {
  return hours === '00' && minutes === '00' && seconds === '00';
};

export { isTimeZero };
