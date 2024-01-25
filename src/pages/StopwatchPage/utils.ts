import { formatTimeValue } from '../../utils/formatTimeValue';

import { TimeState } from '../../types';

const getNewSeconds = ({ seconds, minutes, hours }: TimeState): string => {
  if (hours === '99' && minutes === '59' && seconds === '59') {
    return '59';
  }

  const rawNewSeconds = Number(seconds) + 1;

  if (rawNewSeconds > 59) {
    return '00';
  }

  return formatTimeValue(rawNewSeconds);
};

const getNewMinutes = ({ seconds, minutes, hours }: TimeState): string => {
  if (seconds !== '59') {
    return minutes;
  }

  const rawNewMinutes = Number(minutes) + 1;

  if (rawNewMinutes > 59) {
    return hours === '99' ? '59' : '00';
  }

  return formatTimeValue(rawNewMinutes);
};

const getNewHours = ({ seconds, minutes, hours }: TimeState): string => {
  if (seconds !== '59' || minutes !== '59') {
    return hours;
  }

  const rawNewHours = Number(hours) + 1;

  if (rawNewHours > 99) {
    return '99';
  }

  return formatTimeValue(rawNewHours);
};

export { getNewSeconds, getNewMinutes, getNewHours };
