import { formatTimeValue } from '../../utils/formatTimeValue';

import { TimeState } from '../../types';

const MAX_SECONDS = '59';
const MAX_MINUTES = '59';

const isTimeZero = ({ seconds, minutes, hours }: TimeState): boolean => {
  return hours === '00' && minutes === '00' && seconds === '00';
};

const getNewSeconds = ({ seconds, minutes, hours }: TimeState): string => {
  const rawNewSeconds = Number(seconds) - 1;

  if (rawNewSeconds < 0) {
    return hours === '00' && minutes === '00' ? '00' : MAX_SECONDS;
  }

  return formatTimeValue(rawNewSeconds);
};

const getNewMinutes = ({ seconds, minutes, hours }: TimeState): string => {
  if (seconds !== '00') {
    return minutes;
  }

  const rawNewMinutes = Number(minutes) - 1;

  if (rawNewMinutes < 0) {
    return hours === '00' ? '00' : MAX_MINUTES;
  }

  return formatTimeValue(rawNewMinutes);
};

const getNewHours = ({ seconds, minutes, hours }: TimeState): string => {
  if (!hours) {
    return '00';
  }

  if (seconds !== '00' || minutes !== '00') {
    return hours;
  }

  const rawNewHours = Number(hours) - 1;

  return rawNewHours < 0 ? '00' : formatTimeValue(rawNewHours);
};

export { isTimeZero, getNewHours, getNewMinutes, getNewSeconds };
